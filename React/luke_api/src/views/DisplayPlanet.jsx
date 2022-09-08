import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

//grab params : useParams
//variable change : useState
//call api on load : axios and useEffect
const DisplayPlanet = () => {
    const [planet, setPlanet] = useState()
    const { id } = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${ id }`)
        .then(response => setPlanet(response.data))
        .catch(err => console.log(err))
    }, [id])

  return (
<div>
    {
        planet?
            <div>
                <h1>{planet.name}</h1>
                <p>Climate: {planet.climate} </p>
                <p>Terrain: {planet.terrain} kg</p>
                <p>Orbital Period: {planet.orbital_period}</p>
                <p>Population: {planet.population}</p>
            </div>:
            <img src="https://c.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif" alt="not the driods" />
    }
    </div>
  )
}

export default DisplayPlanet