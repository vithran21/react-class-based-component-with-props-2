import React, { Component } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'

export default class App extends Component {
  constructor() {
    super();
    this.employee = {
      empName: "Vith",
      empAge: 29
    }
  }
  render() {
    return (
      <div>
        <Comp1 c1={<Comp2 c2={<Comp3 c3={<Comp4 c4={this.employee}></Comp4>}></Comp3>}></Comp2>}></Comp1>
      </div>
    )
  }
}
