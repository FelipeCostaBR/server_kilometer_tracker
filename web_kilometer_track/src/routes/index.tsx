import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const MainRoute: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/sign.in" element={<SignIn />} />
      <Route path="/sign.up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
)

export default MainRoute;
