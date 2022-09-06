import React, { useEffect, useState} from 'react'
import DisplayPoke from '../components/DisplayPoke'
import axios from 'axios';

const FetchPoke = () => {
  return (
    <div>
        <h1>Retrieve a Pokemon</h1>
        <h2>From the PokeAPI!</h2>
        <button>Fetch All Pokemon</button>

        <DisplayPoke />
    </div>
  )
}

export default FetchPoke