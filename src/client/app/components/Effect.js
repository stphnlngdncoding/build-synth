import React from 'react';
import { Component } from 'react';

class Effect extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.args.map(arg => {
          let val = Object.values(arg)[0];
          if (typeof val === "number") {
            return (<input 
                      type="range"
                      onChange={(e) => this.props.handleSlider(e, this.props.name)} />)
          }
        })}
      </div>
    )
  }
}

export default Effect;