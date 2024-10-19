import React, { Component } from 'react'

export default class Comp4 extends Component {
  render(props) {
    return (
      <div>
        <h1>This is Comp4</h1>
        <h2>{this.props.c4.empName}</h2>
        <h2>{this.props.c4.empAge}</h2>
        <hr />
      </div>
    )
  }
}
