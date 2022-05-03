import React from 'react'
import Stats from "./Stats"
import Cyrto from "./Cyrtocurrency"
import News from './News'
const MainApp = () => {
  return (
      <>
        <Stats/>
        <Cyrto simplified={true}/> 
        <News simplified={true}/>
      </>
  )
}

export default MainApp