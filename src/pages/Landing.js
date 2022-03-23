import React from 'react'
import NavbarComponent from "../Components/NavbarComponent";
import HeaderComponent from "../Components/HeaderComponent";
import ServicesComponent from "../Components/ServicesComponent";
import AboutComponent from "../Components/AboutComponent";
import HelpComponent from "../Components/HelpComponent";
// import MapComponent from "../Components/MapComponent";
import FooterComponent from '../Components/FooterComponent';
import LoginComponent from '../Components/LoginComponent';


const Landing = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <ServicesComponent />
      <AboutComponent />
      <HelpComponent />
      {/* <MapComponent /> */}
      <FooterComponent />
    </div>
  )
}

export default Landing;