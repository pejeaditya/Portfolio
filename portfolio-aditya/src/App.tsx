import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/#aboutMe" element={<Home />} />
      <Route path="/#projects" element={<Home />} />
      <Route path="/#careerHighlights" element={<Home />} />
      <Route path="/#contactUs" element={<Home />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
