import React, { Component } from 'react';
import EBox from './EBox.js'


class ECol extends Component {

  render() { 
    
    return (
      <div className="ECol">
        <h2 style={{textAlign: "center"}}>{this.props.date}</h2>
        {this.props.boxes.map(box => {
          box.date = this.props.date;
          return (
            <EBox
              box={box}
            />
          )
        })}
        
      </div>
    );
  }
}
 
export default ECol;