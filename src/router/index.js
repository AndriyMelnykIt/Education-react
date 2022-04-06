import React from 'react';

import About from '../pages/About';
import Posts from '../pages/Posts';
import Login from '../components/Login';


export const privateRoutes = [
  {path: '/about', element: <About />, exact: true},
  {path: '/posts', element: <Posts />, exact: true}
]

export const publicRoutes = [
  {path: '/login', element: <Login />, exact: true},

]