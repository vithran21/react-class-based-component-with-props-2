import React, { Component } from 'react'

export default class Comp2 extends Component {
  render() {
    return (
      <div>
         <h1>This is Comp2</h1>
         <hr />
         {this.props.c2}
      </div>
    )
  }
}
