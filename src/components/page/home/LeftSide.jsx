import React, { useContext } from 'react'
import Login from './Login'
// import ServerList from './ServerList'
import ServerList from '../../General/ServerList'
import Ranking from '../../General/Ranking'
import FanPage from '../../General/FanPage'
import Info from '../account/Info'
import { AuthContext } from '../../../layouts/wrap/WrapAuth'

const LeftSide = () => {
  const { auth } = useContext(AuthContext);
  return (
    <aside>
        {auth=== true && 
          <Info />
        }
        {
          auth=== false && 
          <Login />
        }
        <ServerList />
        <Ranking /> 
        <FanPage />
    </aside>
  )
}

export default LeftSide
