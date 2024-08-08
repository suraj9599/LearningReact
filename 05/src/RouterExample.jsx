import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';

const RouterExample = ()=>{
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/login' element={<div>Login</div>}></Route>
                <Route path='*' element={<div>Error 404</div>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterExample;