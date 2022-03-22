import { Grid} from '@material-ui/core'
import React from 'react'

const AboutComponent = () => {
  return (
    <div>
        <Grid container id='cont-about'>
          <Grid item xs={6} id='aboutLeft'>
            Le damos la bienvenida a <br></br>
            <span id='bigSism' >SISM</span> <br></br>
            Conózcanos...
          {/* <span id='welcome'>Te damos la bienvenida a <br></br> SISM</span>
          <div id='aboutRight'>
           <span id='mision'>
            Brindar a nuestros usuarios un servicio de salud ambulatorio de Nivel Primario con calidad a nivel del Departamento del Magdalena; encontrando seguridad, pertinencia, accesibilidad, eficacia, 
            oportunidad y confiabilidad; logrando cumplir con las expectativas de salud, de los usuarios que reciben los servicios; diseñados de acuerdo a los modelos de atención requeridos a nivel departamental y 
            nacional; con un talento humano competente que entregan lo mejor de sí mismos para mejorar la salud y su calidad de vida.</span>
            </div> */}
          </Grid>

          <Grid item xs={6} id='aboutRight'>
            <div className='infoBar'>
              <div class='info'>Misión</div>
            </div>
            
            
          <div class='descrip'>  
          Brindar a nuestros usuarios un servicio de salud ambulatorio de Nivel Primario con calidad a nivel del 
          Departamento del Magdalena; encontrando seguridad, pertinencia, accesibilidad, eficacia, oportunidad y confiabilidad; 
          logrando cumplir con las expectativas de salud, de los usuarios que reciben los servicios; diseñados de acuerdo a los 
          modelos de atención requeridos a nivel departamental y nacional; con un talento humano competente que entregan lo mejor 
          de sí mismos para mejorar la salud y su calidad de vida.
          </div>
            <br></br>
            <br></br>
            

          <div className='infoBar'>
              <div class='info'>Visión</div>
            </div>
            <div class='descrip'>  
            Ser reconocidos como una de las mejores instituciones prestadoras de servicios de 
            salud en el año 2025 en la región caribe, con una atención integral, responsable, 
            segura y eficaz, logrando impactar en el buen comportamiento de la salud de nuestros 
            usuarios, con respeto y ética, con una sostenibilidad financiera que permita contar con la 
            tecnología y el recurso humano que merece la región.
          </div>
          <br></br>
          <br></br>

          <div className='infoBar'>
              <div class='info'>Objetivos</div>
            </div>
            <div class='descrip'>  
            Garantizar un servicio de salud eficiente, humanizado, oportuno y eficaz, que permita mejorar 
            la calidad de vida de nuestros usuarios.
          </div> 

          </Grid>
        </Grid>
    </div>
  )
}

export default AboutComponent