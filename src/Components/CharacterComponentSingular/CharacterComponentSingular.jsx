import React from 'react'
const CharacterComponentSingular = ({iterator}) => {

  return (
    <div className="layout-content">
    <img src={iterator.image} alt="image-of-characters" height="200px" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} />
           <div className='details'>
            <h1>{iterator.name}</h1>
            <h3>{iterator.status}-{iterator.species}</h3>
            <p style={{ color: 'gray' }}>Last seen on</p>
            <h3>{iterator.location.name}</h3>
            </div>
            </div>
  )
}

export default CharacterComponentSingular

//a component that renders again and again is treated as a seperate component.
