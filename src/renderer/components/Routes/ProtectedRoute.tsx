import React, { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Navigate } from 'react-router';
import UserSectionComponent from '../UserSection/UserSectionComponent';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <UserSectionComponent />
}