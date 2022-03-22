import React from 'react'

import LoginComponent from '../Components/LoginComponent';
import FooterComponent from '../Components/FooterComponent';
import NavbarComponent from '../Components/NavbarComponent';


const Login = () => {
  return (
    <div>
        <NavbarComponent />
        <LoginComponent />
        <FooterComponent />
    </div>

  )
}

export default Login