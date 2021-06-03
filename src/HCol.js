import React, { Component } from 'react';

class HCol extends Component {
  render() { 
    return (
      <div className="HCol">
        {this.props.elems.map(elem => {
          return (
              // <h2 >{elem.hour}</h2>
            <h3 style={{top: elem.top}}>{elem.hour}</h3> 
          )
        })}
        
      </div>
    )
  }
}
 
export default HCol;