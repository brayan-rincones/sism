import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login'
import Landing from './pages/Landing'



class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path= "/" element={<Landing />} />
                    <Route exact path= "/Login" element={<Login />} />
                    
                </Routes>

            </BrowserRouter>
        );
    }
}

export default Rutas;