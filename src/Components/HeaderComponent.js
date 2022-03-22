import React, { Component } from "react";
import ag from "../asset/agenda.png";
import M from "materialize-css";
import logo from "../asset/logosism.png"

export default class HeaderComponent extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (
      <div id="container">
        <div id="izq">
            <h2>Servicios Integrales de Salud</h2>
            <h2 id="mag">del Magdalena</h2>
            <h5>Su salud en buenas manos.</h5>
            <img id='sismHeader' src={logo} />
        </div>
        <div id="der">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img id="agenda" src={ag} />
                  {/* <span class="card-title">Agende su cita</span> */}
                  <button type="button">Agendar Cita</button>
                </div>
                <div class="card-content">
                  <p>Agende su cita de manera sencilla y rapida.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      // <div className='row'>
      //   <div class="row">
      //     
      //   </div>

      //   <div>
      //     <div
      //       ref={(Modal) => {
      //         this.Modal = Modal;
      //       }}
      //       id='modal1'
      //       className='modal'
      //     >
      //       <div className='modal-content'>
      //         <h4 className='font'>The Offer Is Coming Soon!</h4>
      //         <p className='para'>
      //           Thanks For You Concern, but we're under development!
      //         </p>
      //       </div>
      //       <div className='modal-footer'>
      //         <a
      //           href='#close'
      //           className='btn btn-header modal-close white-text teal accent-3'
      //         >
      //           Close
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}