import React from 'react';
import { Route, Routes as SwtichRoutes } from 'react-router-dom';

import Home from 'pages/home';
import Sales from 'pages/sales';

// General Routes of the Application 
export default function Routes() {
  return (
    <SwtichRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/sales' element={<Sales />} />
    </SwtichRoutes>
  );
}
