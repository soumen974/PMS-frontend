// App.jsx
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { About,Contact,Services } from "./components/pages";

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
