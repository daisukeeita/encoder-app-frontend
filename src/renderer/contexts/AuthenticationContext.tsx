import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type AuthenticationType = {
  isAuthenticated     : boolean;
  username            : string;
  userRole            : string;
  login               : () => void;
  logout              : () => void;
  setUsername         : Dispatch<SetStateAction<string>>;
  setUserRole         : Dispatch<SetStateAction<string>>;
  setIsAuthenticated  : Dispatch<SetStateAction<boolean>>;
}

type Props = { children : ReactNode }

export const AuthenticationContext = createContext<AuthenticationType>({} as AuthenticationType);

const initializeState = () => {
  const storedAuth = localStorage.getItem("isAuthenticated");
  return storedAuth === 'true';
}

export const AuthenticationContextProvider = ({children} : Props) => {
  const [username, setUsername]               = useState('');
  const [userRole, setUserRole]               = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(initializeState);

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  }

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  }

  const context: AuthenticationType = {
    setUsername,        username,
    setUserRole,        userRole,
    setIsAuthenticated, isAuthenticated,
    login,              logout
  }

  return (
    <AuthenticationContext value={context}>
      {children}
    </AuthenticationContext>
  )
}