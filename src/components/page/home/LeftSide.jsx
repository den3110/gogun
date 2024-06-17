import React from 'react'
import Login from './Login'
// import ServerList from './ServerList'
import ServerList from '../../General/ServerList'
import Ranking from '../../General/Ranking'
import FanPage from '../../General/FanPage'
import useAuth from '../../../context/AuthContext'
import Info from '../account/Info'

const LeftSide = () => {
  const isLoggedIn = useAuth();
  return (
    <aside>
        {isLoggedIn=== true && 
          <Info />
        }
        {
          isLoggedIn=== false && 
          <Login />
        }
        <ServerList />
        <Ranking /> 
        <FanPage />
    </aside>
  )
}

export default LeftSide
