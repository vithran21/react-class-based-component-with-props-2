import React, { Component } from 'react'

export default class Comp1 extends Component {
  render(props) {
    return (
      <div>
        <h1>This is Comp1</h1>
        <hr />
        {this.props.c1}
        
      </div>
    )
  }
}
