import React from 'react'
import CharacterComponent from './Components/CharacterComponent/CharacterComponent'
import { QueryClientProvider, QueryClient } from 'react-query'
import CacheComponent from './Components/CacheComponent/CacheComponent'
import ReactQueryComponent from './Components/ReactQueryComponent/ReactQueryComponent'
const queryClient = new QueryClient()
const App = () => {

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>

        {/* <CharacterComponent /> */}
        <ReactQueryComponent />
        {/* <CacheComponent/> */}

      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App