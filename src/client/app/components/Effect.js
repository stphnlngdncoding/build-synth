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
            // return (<input 
            //           key={i}
            //           type="range"
            //           onChange={(e) => {
            //             e.persist()
            //             this.props.handleSlider(e, this.props.name, key)}} />)
            return (
              <input defaultValue={val} onChange={(e)=>{
                e.persist()
                console.log(this.props)
                this.props.handleTextInput(e, this.props.name, key)}
              } type='text' />
            )
          }
        })}
        <button onClick={() => this.props.toggleEffect(this.props.index)}>toggleEffect</button>
      </div>
    )
  }
}

export default Effect;