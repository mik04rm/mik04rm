window.onscroll = function() {
  var intro = $(".intro-box");
  var bottom =
    intro.offset().top + intro.position().top + intro.outerHeight(true);
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > bottom - 125) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-166px";
  }
};

$(".navbar-nav a, .navbar-brand").on("click", function() {
  $(".navbar-toggler").click();
});

var i = 0;
// var y = 5;
// var x = y;
window.onload = function typeWriter() {
  var txt = "We develop our future";
  var speed = 120;

  var kek = '<span class="blinking-cursor">|</span>';
  
  if (i < txt.length) {
    if(i == txt.length-1) document.getElementById("typewriter").innerHTML = txt.substr(0,i+1) + kek;
    else document.getElementById("typewriter").innerHTML = txt.substr(0,i+1) + '|';
    // console.log(document.getElementById("typewriter").innerHTML);
    // y++;
    // console.log(x,y);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


$('.nav-link').click(function(e){
  e.preventDefault();
	var jumpId = $(this).attr('href');
	$('body,html').animate({scrollTop: $(jumpId).offset().top}, 'slow');
})


// document.getElementsByTagName("body")[0].setAttribute("data-aos-duration","3000"); 

