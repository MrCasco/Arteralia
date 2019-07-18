import React, {Component} from 'react';
import {ContactForm} from '../Components/ContactForm.js'
import '../fonts/stylesheet.css'
import '../styles/contact.css'
import contact_image from '../images/DISEÑO CONTACTANOS.png';

export class Contact extends Component{
  render(){
    return(
      <div style={{backgroundColor:'white'}}>
        <div className='d-block d-xl-none'>
          <ContactForm/>
        </div>

        {
          //WEB down here
        }
        <div className='wrapper-contact-background-image d-none d-xl-block'>
          <br/>
          <img alt='' src={contact_image} className='contact-background-image'/>
          <div className='form-contact-web'>
            <ContactForm/>
          </div>
        </div>
      </div>
    );
  }
}
