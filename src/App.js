import React from 'react';
import { BrowseRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Login from './pages/Login'
import Rutas from './Rutas'
import NavBar from './Components/NavbarComponent'



function App() {
  return (
<div className="App">
    
    <Rutas />
    {/* // <Router>
    //   
    //     <Switch>
    //       <Route path='/'><Landing /></Route>
    //       <Route path='/Login'><Login /></Route>
          
    //     </Switch>
    
    //   
    // </Router> */}
    </div>
    );
}

export default App;