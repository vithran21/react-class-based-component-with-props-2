import React, { Component } from 'react'

export default class Comp3 extends Component {
  render() {
    return (
      <div>
         <h1>This is Comp3</h1>
         <hr />
         {this.props.c3}
      </div>
    )
  }
}
