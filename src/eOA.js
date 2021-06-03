import React from 'react';


const eOAColor = "#e55b7e"
const eOADescr = "Olympic Activities are focused on solving algorithmic tasks in a format similar to that of the IOI in one of the following programming languages: C++, C, Java. We focus on development, not rivalry, as the camp is meant to be a friendly place for everyone. We might give you a hint when you need it or encourage you to exchange ideas with others."


function renderOADetails(leaderI, leaderII, leaderIII) {
  return (
    <>
      <h3>Group I</h3>
      by {leaderI} <br />
      Contest: 8:30 - 13:30
      <br /><br />

      <h3>Group II</h3>
      by {leaderII}<br />
      Contest: 8:30 - 13:00<br />
      Solutions presentation: 13:05 - 13:50
      <br /><br />

      <h3>Group III</h3>
      by {leaderIII} <br />
      Contest: 8:45 - 12:15<br />
      Solutions presentation: 12:20 - 13:00
      <br /><br />

      <p>Location: Upstairs/Downstairs</p>
      <p className="justify">{eOADescr}</p>

    </>
  )
}


const eOA1 = {
  top: "540px",
  height: "380px",
  type: "Olympic Activities",
  color: eOAColor,
  hour: "8:30 - 13:30",
  details: renderOADetails("Kacper Walentynowicz", "Pavel Hudec", "Tomasz Nowak")
}

const eOA2 = {
  top: "540px",
  height: "380px",
  type: "Olympic Activities",
  color: eOAColor,
  hour: "8:30 - 13:30",
  details: renderOADetails("Kacper Walentynowicz", "Kamil Zwierzchowski", "Tomasz Nowak")
}


const eOA3 = {
  top: "540px",
  height: "380px",
  type: "Olympic Activities",
  color: eOAColor,
  hour: "8:30 - 13:30",
  details: renderOADetails("Paweł Anikiel", "Michał Staniewski", "Tomasz Nowak")
}

const eOA4 = {
  top: "540px",
  height: "380px",
  type: "Olympic Activities",
  color: eOAColor,
  hour: "8:30 - 13:30",
  details: renderOADetails("Kacper Walentynowicz", "Andrej Velichkovski", "Tomasz Nowak")
}

const eOA5 = {
  top: "540px",
  height: "380px",
  type: "Olympic Activities",
  color: eOAColor,
  hour: "8:30 - 13:30",
  details: renderOADetails("Kacper Walentynowicz", "Flaviu Craciun", "Tomasz Nowak")
}

const eOA6 = {
  top: "540px",
  height: "380px",
  type: "Olympic Activities",
  color: eOAColor,
  hour: "8:30 - 13:30",
  details: renderOADetails('Mateusz "Radewoosh" Radecki', "Jakub Parada", "Tomasz Nowak")
}

export {eOA1, eOA2, eOA3, eOA4, eOA5, eOA6}