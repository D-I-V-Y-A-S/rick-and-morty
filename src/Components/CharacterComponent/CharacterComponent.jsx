import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CharacterComponent.css'
const CharacterComponent = () => {
    const [data, setData] = useState([])

    //access every character from the api so array use pandrom.

    const getCharacter = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        console.log(response.data.results)
        setData(response.data.results)
    }

    useEffect(() => {
        getCharacter();
    }, [])
    
    //,[]-only one time tha render aagum.

    return (
        <React.Fragment>
            <h1 className="title-part"><b>Rick and Morty</b></h1>

            <div className="layout">
            {data.map(iterator => (
                            
            <div className="align-items" key={iterator.id}>
            <img src={iterator.image} alt="image-of-characters" height="200px" style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}} />

            <div className="details">

            <div>
            <h1>{iterator.name}</h1>
            <h3>{iterator.status}-{iterator.species}</h3>
            </div>

            <div>
            <p style={{color:'gray'}}>Last seen on</p>
            <p><b>{iterator.location.name}</b></p>
            </div>

            </div>
            </div>
          
            ))}
              </div>
        </React.Fragment>
    )
}
export default CharacterComponent