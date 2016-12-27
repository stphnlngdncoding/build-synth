import React from 'react';
import { Component } from 'react';

class Effect extends Component {
  render() {
    return (
      <div>
        <div className={this.props.enabled ? "enabled" : "disabled"}>
          {this.props.name}
        </div>
        {this.props.args.map((arg, i) => {
          let val = Object.values(arg)[0];
          let key = Object.keys(arg)[0]
          if (typeof val === "number") {
            return (
              <input 
                className={this.props.enabled}
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
        <button className="mute-btn" onClick={() => this.props.toggleEffect(this.props.index)}>Mute</button>
        <button className="delete-btn" onClick={(e) => this.props.deleteEffect(e, this.props.index)}>X</button>
      </div>
    )
  }
}

export default Effect;