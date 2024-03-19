import React, { lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import OptimizedImage from './Components/Pages/OptimizedImage';
import UnOptimizedImage from './Components/Pages/UnOptimizedImage';
import ListItems from './Components/Pages/ListItems';

// const Home = lazy(() => wait(1000).then(()=> import('./Components/Pages/Home')) )
// const About = lazy(() => wait(1000).then(()=> import('./Components/Pages/About')))
// OptimizedImage = lazy(() => wait(1000).then(()=> import('./Components/Pages/OptimizedImage')))
// UnOptimizedImage = lazy(() => wait(1000).then(()=> import('./Components/Pages/UnOptimizedImage')))
// const Images = lazy(() => wait(1000).then(()=>  import('./Components/Pages/Images')))
// const ListItems = lazy(() => wait(1000).then(()=>  import('./Components/Pages/ListItems')))

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/optimizedimages" element={<OptimizedImage/>} />
            <Route path="/unoptimizedimages" element={<UnOptimizedImage/>} />
            <Route path="/list" element={<ListItems/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


   