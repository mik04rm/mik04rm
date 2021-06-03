import React from 'react';

const eSEColor = "#4AE014";

const eSE1 = {
  top: "80px",
  height: "120px",
  hour: "2:00 - 3:00",
  type: "Special Event",
  details:
    <>
      <h3>The Super-Duper Special Lecture</h3>
      <p>by The Super-Duper Special Guest</p>
      <p>
        Try to survive the next Super-Duper Special Lecture
        but this time at night! Lots of science, hard algos, and the
        Super-Duper Special Guest are guaranteed.
      </p>
    </>,
  loc: "Upstairs",
  color: eSEColor,
}

const eSE2 = {
  hour: "19:00", top: "1450px", height: "120px", color: eSEColor, type: "Special Event",
  details:
  <>
    <h3> Introduction to hackathons and Hack Kosice<br/> (19:00 - 19:20)</h3>
    <p>by Matúš Makatura, Hack Kosice</p>
    <p>
    What the hell is Hack Kosice? That is the question we are going to answer! We will introduce you to our team, our motivation and core values and explain what are hackathons in general and why you should definitely attend them.
    </p>
    <p>Location: Upstairs</p>
    
    <br />

    <h3>Introduction to MidNightGame<br/> (19:30 - 20:00)</h3>
    <p>by Piotr Kowalewski, Meet IT</p>
    <p>
      MidNightGame is a Camp IT mini-hackathon. All night programming, smart bots, pizza and cat wars at their best!    
    </p>
    <p>Location: Upstairs</p>
  </>
}

const eSE3 = {
  hour: "21:00", top: "1690px", height: "120px", color: eSEColor, type: "Special Event",
  details:
    <>
      <h3>Sets</h3>
      <p>by Hack Kosice Team</p>
      <p>
      Do you think you know all rooms in this accommodation? You don't! During this activity you will creep into the most secluded places to find hidden cards with special symbols to remember. By entering correct triplets of codes founds on these cards, your team gain points.
      </p>
      <p>Location: Upstairs</p>
    </>
}

const eSE4 = {
   hour: "16:00", top: "1150px", height: "100px", color: eSEColor, type: "Special Event",
   details:
   <>
     <h3>The Super-Duper Special Lecture</h3>
     <p>by The Super-Duper Special Guest</p>
     <p>
       The Super-Duper Special Lecture is going to be seriously super-duper. Lots of science, hard algos, and the Super-Duper Special Guests are guaranteed
     </p>
     <p>Location Upstairs</p>
   </>,
}

const eSE5 = {
  hour: "24:00", top: "1910px", height: "120px", color: eSEColor, type: "Special Event",
  details:
    <>
      <h3>Minigames</h3>
      <p>by Hack Kosice Team</p>
      <p>
      You don’t fancy long games? Fear not! We have prepared for you minigames that you can play by yourself or with friends to win small prices!
      </p>
      <p>Location: Downstairs</p>
    </>
}

export {eSE1, eSE2, eSE3, eSE4, eSE5}