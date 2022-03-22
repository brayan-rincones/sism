import { Grid } from '@material-ui/core'
import React from 'react'
import logoFoot from '../asset/footlogo.png'
import fb from '../asset/fb.png'
import tw from '../asset/tw.png'

const FooterComponent = () => {
  return (
    <Grid className='footContain' item xs={12}>
        <Grid item xs={3}>
            <img src={logoFoot} id='footLogo'/>
        </Grid>
        <Grid item xs={3}>
            
            Tel: 
            <br></br>
            (5)4394152 - 4394153 Santa Marta D.T.C.H.
            <br></br>
            <br></br>
            Dirección:
            <br></br>
            Carrera 19 No. 26B - 53 
            <br></br>
            Barrio Los Naranjos
            <br></br>
            <br></br>
            
            Desarollado por el Departamento de T.I. - SISM
        </Grid>
        <Grid item xs={3}>
            Visita nuestras redes sociales
            <br></br>
            <br></br>
            <img class='redes' src={fb} />
            <img class='redes' src={tw} />
        </Grid>
    </Grid>
  )
}

export default FooterComponent