import React from 'react'
import BoxNavigation from './BoxNavigation'
import BoxCard from './BoxCard'
import BoxGuide from './BoxGuide'
import BoxItem from './BoxItem'
import MediaQuery from 'react-responsive'

const Box = () => {
  return (
    <>
     <BoxNavigation /> 
     <MediaQuery maxWidth={625}>
      <BoxCard />
     </MediaQuery>
     <BoxGuide />
     <BoxItem />
    </>
  )
}

export default Box
