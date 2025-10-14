import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '../Authentication/LoginPage'
import { AuthenticationContext } from '../../contexts/AuthenticationContext'
import UserSectionComponent from '../UserSection/UserSectionComponent'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRoutes = () => {
  const {isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<Navigate to={isAuthenticated ? "/userSection" : "/login"} replace />}
        />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/userSection' element={<UserSectionComponent />} />
        </Route>
      </Routes>
    </>
  )
}