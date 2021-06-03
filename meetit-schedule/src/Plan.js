import React, { Component } from 'react';
import ECol from './ECol'
import HCol from './HCol'
import { ePA1, ePA2, ePA3, ePA4, ePA5, ePA6, ePA7, ePA8 } from './ePA'
import { eEA1, eEA2, eEA3, eEA4, eEA5, eEA6, eEA7, eEA8, eEAx } from './eEA'
import { eSE1, eSE2, eSE3, eSE4, eSE5 } from './eSE'
import { eMA1, eMA2, eMA3, eMA5 } from './eMA'
import { eOA1, eOA2, eOA3, eOA4, eOA5, eOA6 } from './eOA'

const eEatColor = "#422352";

const eBr = {
  top: "420px",
  height: "120px",
  hour: "7:30 - 8:30",
  type:
    <> Breakfast </>,
  details:
    <p>om nom nom </p>,

  color: eEatColor,
}

const eBr_ = {
  top: "600px",
  height: "100px",
  hour: "9:00",
  type:
    <>Breakfast </>,
  details:
    <p>om nom nom </p>,

  color: eEatColor
}

const eMNGEnd = {
  hour: "8:00",
  top: "480px",
  height: "60px",
  type: <span style={{ fontSize: "13px" }} >MidNightGame end!</span>,
  color: "#333333",
  details:
    <>
      <h3>MidNightGame end!</h3>
      <p>by Piotr Kowalewski &amp; Paweł Anikiel</p>
      <p>Come and check whose cat survived!</p>
      <p>Location: Upstairs</p>
    </>
}

const eMNGStart = {
  hour: "19:20", top: "1570px",height:"60px",
  type: <span style={{ fontSize: "12px" }} >MidNightGame start!</span>,
  color: "#333333",
  details:
    <>
      <h3>MidNightGame start!</h3>
      <p>by Piotr Kowalewski &amp; Paweł Anikiel</p>
      <p>Having any questions, do not hesitate to ask organizers!</p>
      <p>Location: Everywhere</p>
    </>
}

const eTripBeg = {
  hour: "13:30",
  top: "860px",
  height: "60px",
  type: "Special Trip",
  color: "#333333",
  details:
  <>
    <h3>Special Trip <br/> (13:30 - 21:00)</h3>
    <p>by Karol Świtajski</p>
    <p>We will be going on a long (about 8 hours) trip during which we will shoot 
      with an air gun, slide down the hill on a zip-line, and have a fight whilst hanging off the bridge
    </p>
    <p>Location: Outside</p>
  </>
}

const eLun = {
  hour: "14:00",
  top: "950px",
  height: "100px",
  type: "Lunch",
  color: eEatColor,
  details:
    <p>Mmm Potatoes :3</p>,
}

const eLun_ = {
  hour: "13:00",
  top: "760px",
  height: "100px",
  type: "Lunch",
  color: eEatColor,
  details:
    <p>Mmm Potatoes :3</p>,
}

const eDin = {
  hour: "18:00",
  top: "1350px",
  height: "100px",
  type: "Dinner",
  color: eEatColor,
  details:
    <p>Mmm Potatoes :3</p>,
}

const eIBG = {
  hour: "20:00", top: "1570px", height: "120px", color: "#4AE014", type: "Ice Breaking Game",
  details:
    <>
      <h3>Ice Breaking Game</h3>
      <p>by Paulina Skalik</p>
      <p>Come and play bunch of funny games that will break all ices between you and your new friends</p>
      <p>Location: Upstairs</p>
    </>
}

const eClosing = {
  hour: "16:00", top: "1150px", height: "100px", color: "#888888", type: "Closing Ceremony",
  details:
    <>
      <h3>Closing Ceremony</h3>
      <p>by Mateusz Masłowski</p>
      <p>The end? :c</p>
      <p>Location: Upstairs</p>
    </>
}

const eSupperTrip = {
  hour: "21:00", top: "1690px", height: "120px", color: eEatColor, type: "Supper for Trippers",
  details:
    <p>Huge portion of Potatoes!</p>,
}

const eOpening = {
  hour: "19:00", top: "1450px", height: "120px", color: "#888888", type: "Opening Ceremony",
  details:
    <>
      <h3>Opening Ceremony</h3>
      <p>by Mateusz Masłowski</p>
      <p>Let's meet it and start it!</p>
      <p>Location: Upstairs</p>
    </>
}




class Plan extends Component {

  render() {
    return (
      <div className="Plan">
        <div className="plan">
          <HCol elems={[
            { hour: "2:00", top: "100px" },
            { hour: "7:00", top: "320px" },
            { hour: "9:00", top: "620px" },
            { hour: "12:00", top: "750px" },
            { hour: "14:00", top: "970px" },
            { hour: "17:00", top: "1270px" },
            { hour: "21:00", top: "1710px" },
            { hour: "24:00", top: "1930px" },
          ]} />
          <ECol date="01/09" boxes={[ePA8, eDin, eOpening, eIBG]} />
          <ECol date="02/09" boxes={[eBr, eMA1, eOA1, eLun, ePA1, eDin, eEA1, eEA6]} />
          <ECol date="03/09" boxes={[eBr, eMA2, eOA2, eLun, ePA2, eSE4, eDin, eEA2, eEA7]} />
          <ECol date="04/09" boxes={[eBr, eMA3, eOA3, eLun, ePA3, eDin, eSE2, eMNGStart, eSE3, eSE5]} />
          <ECol date="05/09" boxes={[eSE1, eMA2, eMNGEnd, eBr_, eLun_, eTripBeg, eDin, eSupperTrip]} />
          <ECol date="06/09" boxes={[eBr, eMA5, eOA4, eLun, ePA4, eDin, eEA3, eEAx, eEA8]} />
          <ECol date="07/09" boxes={[eBr, eMA2, eOA5, eLun, ePA5, ePA7, eDin, eEA4, eEA5]} />
          <ECol date="08/09" boxes={[eBr, eMA1, eOA6, eLun, ePA6, eClosing]} />
        </div>
      </div>
    );
  }
}

export default Plan;