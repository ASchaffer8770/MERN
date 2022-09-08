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
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>:
            <h1>Invalid Character ID</h1>
    }
    </div>
  )
}

export default DisplayPlanet