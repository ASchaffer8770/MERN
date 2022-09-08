import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

//grab params : useParams
//variable change : useState
//call api on load : axios and useEffect

const DisplayPeople = () => {

    const [people, setPeople] = useState()
    const { id } = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${ id }`)
        .then(response => setPeople(response.data))
        .catch(err => console.log(err))
    }, [id])

  return (
    <div>
    {
        people?
            <div>
                <h1>{people.name}</h1>
                <p>Height: {people.height} cm</p>
                <p>Mass: {people.mass} kg</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin Color: {people.skin_color}</p>
            </div>:
            <img src="https://c.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif" alt="not the driods" />
    }
    </div>
  )
}

export default DisplayPeople