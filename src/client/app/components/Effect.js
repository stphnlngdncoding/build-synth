import React from 'react';
import { Component } from 'react';

class Effect extends Component {
  render() {
    return (
      <div>
        {this.props.enabled ? this.props.name : "disabled"}
        {this.props.args.map((arg, i) => {
          let val = Object.values(arg)[0];
          let key = Object.keys(arg)[0]
          if (typeof val === "number") {
            return (
              <input 
                key={i}
                defaultValue={val} 
                type='text'
                onChange={(e)=>{
                  e.persist()
                  this.props.handleTextInput(e, this.props.name, key)}
                } />
            )
          }
        })}
        <button onClick={() => this.props.toggleEffect(this.props.index)}>toggleEffect</button>
        <button onClick={(e) => this.props.deleteEffect(e, this.props.index)}>del</button>
      </div>
    )
  }
}

export default Effect;