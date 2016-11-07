import React from 'react';
import { Component } from 'react';

class Effect extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.args.map(arg => {
          if (typeof arg === "number") {
            return (<input 
                      type="range"
                      onChange={this.props.handleSlider} />)
          }
        })}
      </div>
    )
  }
}

export default Effect;