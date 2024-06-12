import React from 'react'
import Login from './Login'
import ServerList from './ServerList'
import Ranking from './Ranking'
import FanPage from './FanPage'

const LeftSide = () => {
  return (
    <aside>
        <Login />
        <ServerList />
        <Ranking />
        <FanPage />
    </aside>
  )
}

export default LeftSide
