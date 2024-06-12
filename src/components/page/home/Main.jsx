import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="wrap-flex">
            <LeftSide />
            <RightSide />
        </div>
      </div>
    </main>
  )
}

export default Main
