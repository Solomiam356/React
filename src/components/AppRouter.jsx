import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/router';
import { AuthContext } from '../context/context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if(isLoading) {
      return <Loader/>
    }

  return (
    isAuth 
    ? <Routes>
      {privateRoutes.map(route =>
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      )}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
    : <Routes>
        {publicRoutes.map(route =>
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      )}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter;
