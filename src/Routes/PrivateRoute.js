import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../Components/Spinner/Spinner'
import { AuthContext } from '../contexts/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(user,loading)
  if (loading && !user?.email) {
    return <Spinner />
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute
