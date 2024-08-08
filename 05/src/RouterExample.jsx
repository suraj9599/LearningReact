import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';

const RouterExample = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterExample;