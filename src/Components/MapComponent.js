import React, { Component } from 'react'

class MapComponent extends Component{
    render(){
        return (
            // <div>hola</div>
            <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.3601845209328!2d-74.20745748585774!3d11.23489235363737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5779cf44e2d%3A0x327e74cd232e89d!2sS.I.S.M.%20Servicios%20Integrales%20de%20Salud%20del%20Magdalena!5e0!3m2!1ses!2sco!4v1647929476728!5m2!1ses!2sco" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        )
    }
}

export default MapComponent