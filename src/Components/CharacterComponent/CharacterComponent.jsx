import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CharacterComponent.css'
const CharacterComponent = () => {
    const [data, setData] = useState([])

    const getCharacter = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        console.log(response.data.results)
        setData(response.data.results)
    }

    useEffect(() => {
        getCharacter();
    }, [])

    return (
        <React.Fragment>
            <h1 className="title-part"><b>Rick and Morty</b></h1>
            <div className="positioning">
            {data.slice(0, 20).map(iterator => (
               
            <div className="align-items" key={iterator.id}>
            <img src={iterator.image} alt="image-of-characters" height="200px"/>
            <div className="details">
                <div>
            <h1>{iterator.name}</h1>
            <h3>{iterator.status}-{iterator.species}</h3>
            </div>
            <div>
            <p style={{color:'gray'}}>Last seen on</p>
            <h5>{iterator.location.name}</h5>
            </div>
            </div>
            </div>
          
            ))}
              </div>
        </React.Fragment>
    )
}
export default CharacterComponent