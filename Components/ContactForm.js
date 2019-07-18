import React, {Component} from 'react';
import contactanos from '../images/letrero contactanos.svg';

export class ContactForm extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="contact-wrapper">
          <div id="characters-title" className="d-lg-none d-xl-none d-md-block">
            <div className="characters-title-panel-contact">
              <img alt="" id="characters-title-image" src={contactanos}/>
            </div>
          </div>

          <div>
            <form action="../Pages/Congratulations.php">
              <div className="form-group round-padding-2">
                <label>Correo electrónico</label>
                <input required name='email' id="email" type="email" className="form-control" placeholder="correo@ejemplo.com"/>
              </div>
              <div className="form-group round-padding-2">
                <label>Nombre</label>
                <input required name='name' id="name" type="text" className="form-control" placeholder="Tu nombre aquí"/>
              </div>
              <div className="form-group round-padding-2">
                <label>Mensaje</label>
                <textarea required name='message' id="message" className="form-control" rows="3" placeholder="Mensaje">
                </textarea>
              </div>
              <button className="btn-lg button-form round-padding-2 btn btn-success">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
