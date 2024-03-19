import React, { lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
// import Home from './Components/Pages/Home';
// import About from './Components/Pages/About';
// import Images from './Components/Pages/Images';

const Home = lazy(() => wait(1000).then(()=> import('./Components/Pages/Home')) )
const About = lazy(() => wait(1000).then(()=> import('./Components/Pages/About')))
const Images = lazy(() => wait(1000).then(()=>  import('./Components/Pages/Images')))

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


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


   