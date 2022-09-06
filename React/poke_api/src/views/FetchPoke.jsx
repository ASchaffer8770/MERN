import React, { useState } from 'react'
import DisplayPoke from '../components/DisplayPoke'
import axios from 'axios';

const FetchPoke = () => {
    const [pokemon, setPokemon] = useState()

    // const fetchPokemonAxios = () => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon?limit=808&offset=0`)
    //     .then(response => {
    //         console.log(response)
    //         return response.json()
    //     })
    //     .then(jsonResponse => {
    //         console.log(jsonResponse)
    //         setPokemon(jsonResponse)
    //     })
    //     .catch(err => console.log(err))
    // }
    // const fetchPokemon = async() => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=808&offset=0`)
    //     const jsonResponse = await response.json()
    //     console.log(jsonResponse)
    //     setPokemon(jsonResponse)
    // }

    const fetchPokemonWithAxios =() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=808&offset=0`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch()
    }


  return (
    <div>
        <h1>Retrieve a Pokemon</h1>
        <h2>From the PokeAPI!</h2>
        <button onClick={fetchPokemonWithAxios}>Fetch All Pokemon</button>
            {
            pokemon?
            <DisplayPoke pokemon = {pokemon}/>:
            <h1>Loading...</h1>
            }
    </div>
  )
}

export default FetchPoke