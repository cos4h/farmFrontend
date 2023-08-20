import React from 'react'
import { useAuth } from './context/AuthContext.jsx'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if(loading) {
    return <h1>loading...</h1>
  }
  if(!loading && !isAuthenticated)  return <Navigate to="/login" replace/>;

  return <Outlet />;
}
 