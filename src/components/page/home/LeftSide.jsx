import React from 'react'
import Login from './Login'
// import ServerList from './ServerList'
import ServerList from '../../General/ServerList'
import Ranking from '../../General/Ranking'
import FanPage from '../../General/FanPage'

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
