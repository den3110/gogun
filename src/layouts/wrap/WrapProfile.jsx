import { createContext, useContext, useState, useEffect, memo } from 'react';
import axios from 'axios';
import UserData from '../../context/UserContext';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user= UserData()

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default memo(UserProvider)

export const useUser = () => useContext(UserContext);
