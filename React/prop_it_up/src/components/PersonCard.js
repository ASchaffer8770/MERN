import React, { Component } from 'react'

const PersonCard = (props) => {
        return (
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                <h1></h1>
            </div>
        );
    }

export default PersonCard