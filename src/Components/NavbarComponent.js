import React from 'react';
import { AppBar, Avatar, Button, Toolbar } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import logo from '../asset/logosism.png'
import Rutas from '../Rutas';
import Login from '../pages/Login';




const NavbarComponent = () => {
  return (
    <AppBar> 
        <Toolbar className='tool'>    
            <img src={ logo} alt='logo' class="logoImg" onClick={() => document.location.href = "http://localhost:3000/"}/>
            <span id='acro' onClick={() => document.location.href = "http://localhost:3000/"}>SISM</span>
            <Button id='loginBtn'  
                    variant='contained' 
                    onClick={() => document.location.href = "http://localhost:3000/Login"}>
                      Iniciar Sesión</Button>
            <Button id='signupBtn' 
            color='primary' variant='contained' 
            onClick={() => document.location.href = "http://localhost:3000/Login"}>Registrarse</Button>
        </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent



// export default class NavbarComponent extends Component {

//     render() {
//         return (
//             <div className="nav-wrapper">
//                 <nav className='nav z-depth-0'>
//                 <a href='#logo' className='brand-logo purple-text text-darken-4'>
//                     SISM
//                 </a>
//                     <div className="container">
//                         <ul id="nav-mobile" class="right hide-on-med-and-down">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">About</a></li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         );
//     }
// }