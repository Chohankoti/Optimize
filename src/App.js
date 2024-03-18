import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Images from './Components/Pages/Images';



export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/images" element={<Images/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
