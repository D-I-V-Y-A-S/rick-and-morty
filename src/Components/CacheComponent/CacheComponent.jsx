import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CacheComponent.css'
import CharacterComponentSingular from '../CharacterComponentSingular/CharacterComponentSingular'
import { useQuery } from 'react-query'
const CacheComponent = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const getCharacter = async ({ queryKey }) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        //queryKey-to make cache works.[1]represents the pagenumber as [0] is characters.
        console.log(queryKey);
        return response.data
    }

    const { data, status, isPreviousData, isLoading, isError } = useQuery(['characters', pageNumber], getCharacter,
        {
            KeepPreviousData: true
        })

    //data-axios data ; status-loading,error
    // KeepPreviousData keep previous data until the rendering of next data.

    if (isLoading) {
        return <div>loading...</div>
    }

    if (isError) {
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
                    disabled={isPreviousData || !data.info.next}
                    onClick={renderNextPage}>
                    Next
                </button>
            </div>
        </React.Fragment>
    )
}

export default CacheComponent