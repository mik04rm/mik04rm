import React, { Component } from 'react';
import LightenColor from './LightenColor';


class EBox extends Component {

  state = {
    modalOpened: false,
  }


  toggleModal = () => {
    let viewport = document.querySelector("meta[name=viewport]");
    if(!this.state.modalOpened) viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=0');
    else {
      viewport.setAttribute('content', 'width=device-width, initial-scale=0.2');
    }
    this.setState({
      modalOpened: !this.state.modalOpened,
    })
  }

  renderModal = () => {
    if (!this.state.modalOpened) return null
    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.box.type} {this.props.box.date}
              </h5>
              <button type="button" className="close" onClick={this.toggleModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.box.details}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.toggleModal}>Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <div
          className="eBox"
          style={{ 
            height: this.props.box.height, 
            top: this.props.box.top, 
            backgroundColor: this.props.box.color, 
            borderColor: LightenColor(this.props.box.color, -20), 
          }}
          onClick={this.toggleModal}
        >
          
          <div className="onBox">
            <b>{this.props.box.hour}</b>
            <br/>
            {/* <b>{this.props.hour}</b> */}
            {/* <br/> */}
            {/* {this.props.onBox} */}
            {this.props.box.type}
          </div>
        </div>

        {this.renderModal()}

      </>
    );
  }
}

export default EBox;