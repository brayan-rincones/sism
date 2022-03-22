import react from 'react'
import { Grid, Button } from '@material-ui/core'


const HelpComponent = () => {
  return (
    <div>
        <Grid container id='cont-help'>
          <Grid item xs={6} id='helpLeft'>         
            <div id='helpDescription'>  
                Como Institución prestadora de servicios de salud ofrecemos servicios de 
                I y II Nivel de Complejidad de tipo ambulatorio, enmarcados en un modelo familiar como su eje y objetivo.
            </div>
            <br></br>
            <span id='canuHelp'>¿En qué podemos ayudar?</span>
            <br></br>
            <br></br>
            
            

            <div id="topbar-container">
                <div id="bar">
                    <div class="input-field col s6 s12 red-text">
                        <input type="text" placeholder="Busque su servicio" id="autocomplete-input" class="autocomplete black-text" />
                    </div>
                </div>
                <div id="btnbar">
                    <br></br>
                    <Button id='searchBtn' color='primary' variant='contained'>🔍︎</Button>
                </div>
            </div> 
          </Grid>
        </Grid>
    </div>
  )
}

export default HelpComponent