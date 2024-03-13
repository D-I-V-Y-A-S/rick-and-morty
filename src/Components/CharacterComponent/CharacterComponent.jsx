import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CharacterComponent = () => {
    const [data, setData] = useState({})

    const getCharacter = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        console.log(response.data.results)
        setData(response.data.info)
    }
    useEffect(() => {
        getCharacter();
    }, [])
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

export default CharacterComponent