import React from 'react'
import MediaQuery from 'react-responsive'
import LeftSideMobile from '../LeftSideMobile'
import RightSideMobile from '../RightSideMobile'

const MainMobile = () => {
  return (
    <MediaQuery maxWidth={625}>
      <LeftSideMobile />
      <RightSideMobile />
    </MediaQuery>
  )
}

export default MainMobile
