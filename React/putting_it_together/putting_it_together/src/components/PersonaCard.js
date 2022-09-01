import React, { Component } from 'react'

export class PersonaCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.props.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
      </div>
    )
  }
}

export default PersonaCard