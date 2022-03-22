import React from "react";
import one from "../asset/gen.jpg";
import two from "../asset/odo.jpg";
import thr from "../asset/car.jpg";
import four from "../asset/end.jpg";
import fiv from "../asset/enf.PNG";
import six from "../asset/lab.jpg";
import sev from "../asset/gin.jpg";
import eig from "../asset/int.jpg";
import nin from "../asset/fam.jpg";
import ten from "../asset/med.jpeg";
import ele from "../asset/nut.jpg";
import twe from "../asset/ped.jpg";
import thi from "../asset/psi.jpg";
import fourt from "../asset/res.jpg";
import fivet from "../asset/tem.jpg";
import sixt from "../asset/ult.jpg";

export default function ServicesComponent() {
  return (
    <div className='serviceMain hide-on-small-only'>
      <div className='row'>
        <h4 className='font'>
            <br></br>
          <b>Nuestros Servicios.</b>
        </h4>
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={one} alt='bg' />
                <h5 className='font'>Medicina General</h5>
            </div>
        </div>

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={two} alt='bg' />
                <h5 className='font'>Odontologia</h5>
            </div>
        </div>
        

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={thr} alt='bg' />
                <h5 className='font'>Diagnóstico Cardiovascular</h5>
            </div>
        </div>

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={four} alt='bg' />
                <h5 className='font'>Endocrinologia</h5>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={fiv} alt='bg' />
                <h5 className='font'>Enfermeria</h5>
            </div>
        </div>
        <br></br>
        <br></br>

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={six} alt='bg' />
                <h5 className='font'>Laboratorio Clínico</h5>
            </div>
        </div>
        <br></br>

 
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={sev} alt='bg' />
                <h5 className='font'>Ginecobstetricia</h5>
            </div>
        </div>
        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={eig} alt='bg' />
                <h5 className='font'>Medicina Interna</h5>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={nin} alt='bg' />
                <h5 className='font'>Medicina Familiar</h5>
            </div>
        </div>

        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={ten} alt='bg' />
                <h5 className='font'>Dispensación de Medicamentos</h5>
            </div>
        </div>

        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={ele} alt='bg' />
                <h5 className='font'>Nutrición y dietética</h5>
            </div>
        </div>

        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={twe} alt='bg' />
                <h5 className='font'>Pediatria</h5>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={thi} alt='bg' />
                <h5 className='font'>Psicología</h5>
            </div>
        </div>

        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={fourt} alt='bg' />
                <h5 className='font'>Terapia Respiratoria</h5>
            </div>
        </div>

        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={fivet} alt='bg' />
                <h5 className='font'>Detección Temprana y Protección Específica</h5>
            </div>
        </div>

        
        <div className="service">
            <div className='col s12 m3'>
                <img className='responsive-img' src={sixt} alt='bg' />
                <h5 className='font'>Ultrasonido</h5>
            </div>
        </div>

      </div>
    </div>

  );
}