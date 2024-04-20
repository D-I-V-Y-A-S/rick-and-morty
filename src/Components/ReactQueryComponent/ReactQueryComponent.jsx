import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ReactQueryComponent.css'
import CharacterComponentSingular from '../CharacterComponentSingular/CharacterComponentSingular'
import { useQuery } from 'react-query'
const ReactQueryComponent = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const getCharacter = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
        return response.data
    }

    const { data, status } = useQuery(['characters', pageNumber], getCharacter,)

    //data-axios data ; status-loading

    if (status === 'loading') {
        return <div>loading...</div>
    }

    if (status === 'error') {
        return <div>error...</div>
    }

    const renderPreviousPage = () => {
        setPageNumber((Number) => Number - 1)
    }
    const renderNextPage = () => {
        setPageNumber((Number) => Number + 1)

    }
    //in setPageNumber whatever variable name can be used.

    return (
        <React.Fragment>
            <h1 className="title-part"><b>Rick and Morty</b></h1>
            <div className="layout">
                {data.results && data.results.map(iterator => (
                    <CharacterComponentSingular key={iterator.id} iterator={iterator} />
                    //props->{iterator}
                ))}

            </div>
            <div className="button-align">
                <button
                    className="btn"
                    disabled={pageNumber === 1}
                    onClick={renderPreviousPage}>
                    previous
                </button>
                <button
                    className="btn"
                    disabled={!data.info.next}
                    onClick={renderNextPage}>
                    Next
                </button>
            </div>
        </React.Fragment>
    )
}

export default ReactQueryComponent
//if want to visit last page setstate to 42.