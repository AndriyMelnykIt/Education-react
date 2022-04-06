import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {

  const {isAuth} = useContext(AuthContext);

  return (
      <Routes>
        isAuth
        ? {privateRoutes.map(route =>
              <Route element={route.element} path={route.path} exact={route.exact} />
            )}
        : {publicRoutes.map(route =>
              <Route element={route.element} path={route.path} exact={route.exact} />
            )}
      </Routes>
  );
};

export default AppRouter;
