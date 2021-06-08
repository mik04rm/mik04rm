package main

import (
	"errors"
	"fmt"
	"math"
	"net/http"
	"net/url"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Page struct {
	gorm.Model
	Link        string `gorm:"unique"`
	Hours       float64
	LastUpdated time.Time
}

func extractLinks(link string) ([]string, error) {
	resp, err := http.Get(link)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("Status code %s != 200", resp.Status)
	}
	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return nil, err
	}
	parsedLink, err := url.Parse(link)
	if err != nil {
		return nil, err
	}
	var links []string
	doc.Find("a[href]").Each(func(index int, item *goquery.Selection) {
		newLink, exist := item.Attr("href")
		if !exist {
			return
		}
		parsedNewLink, err := parsedLink.Parse(newLink)
		if err != nil {
			fmt.Println(err)
			return
		}
		newLink = parsedNewLink.String()

		if parsedNewLink.Hostname() != parsedLink.Hostname() {
			return
		}
		links = append(links, newLink)
	})

	return links, nil
}

func newHours(oldHours float64, count int) float64 {
	var ret float64
	switch count {
	case 0:
		ret = oldHours * 2
	case 1:
		ret = oldHours
	case 2:
		ret = oldHours / 1.25
	case 3:
		ret = oldHours / 1.5
	case 4:
		ret = oldHours / 1.75
	default:
		ret = oldHours / 2
	}
	return math.Max(2, ret)
}

func crawl(page *Page) error {
	links, err := extractLinks(page.Link)
	if err != nil {
		//jakbysmy zreturnowali bez tych dwoch linijek to ten page by mial ciagle priorytet
		page.Hours = 1e9
		db.Save(&page)
		return err
	}
	newLinksCount := 0
	for _, link := range links {
		if db.Where("link = ?", link).First(&Page{}).RecordNotFound() {
			db.Create(&Page{Link: link, Hours: 24, LastUpdated: time.Unix(0, 0)})
			newLinksCount++
		}
	}
	page.Hours = newHours(page.Hours, newLinksCount)
	page.LastUpdated = time.Now()
	db.Save(&page)
	return nil
}

var db *gorm.DB

func init() {
	dbLink := "root:pass@/links?charset=utf8&parseTime=True&loc=Local"
	var err error
	db, err = gorm.Open("mysql", dbLink)
	if err != nil {
		fmt.Println(err)
		return
	}
}

func getPrioritised() (Page, error) {
	var page Page
	dbPositive := db.Where("TIME_TO_SEC(TIMEDIFF(NOW(), last_updated)) > 0")
	dbFirst := dbPositive.Order("TIME_TO_SEC(TIMEDIFF(NOW(), last_updated)) - 3600 * hours desc").First(&page)
	if dbFirst.RecordNotFound() {
		return Page{}, errors.New("No record with positive priority")
	}
	return page, nil
}

func main() {
	defer db.Close()
	db.AutoMigrate(&Page{})
	for {
		time.Sleep(1 * time.Second)
		page, err := getPrioritised()

		if err != nil {
			fmt.Println(err)
			continue
		}
		err = crawl(&page)
		if err != nil {
			fmt.Println(err)
		}
	}
}
