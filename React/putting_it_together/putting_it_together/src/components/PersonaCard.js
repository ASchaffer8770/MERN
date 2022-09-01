import React, { Component } from 'react'

export class PersonaCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        age : 45,
        secondAge : 88
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p> Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={() => this.setState({age: this.state.age +1})}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
      </div>
    )
  }
}

export default PersonaCard