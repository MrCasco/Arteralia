import React, {Component} from 'react'
import PropTypes from 'prop-types'

import elf from '../images/elfo.png'
import fairy from '../images/hada.png'
import mouse from '../images/ratoncito.png'
import custom from '../images/avion.svg'
import unicorn from '../images/puertas/puertas unicornio.jpg'

export class Card extends Component{
  static propTypes = {
    id : PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
  }

  render(){
    const {id, image, text, title} = this.props

    if (id === 'elf') {
      return(
        <div>
          <div className="padding col-sm-12 col-md-12" style={{width: '100%'}}>
            <img src={elf} className="card-image" alt="..."/>
            <div className="card-body body-elf">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      )
    }
    if (id === 'fairy') {
      return(
        <div>
          <div className="padding col-md-12" style={{width: '100%'}}>
            <img src={fairy} className="card-image" alt="..."/>
            <div className="card-body body-fairy">
              <p className="card-text">
                El hada de los dientes es una princesa de las hadas, ama venir al mundo de los niños por
                los dientitos y dejarlos en el cielo para que brillen como estrellas y recordar la infancia
                de cada pequeño.
              </p>
              <p className="card-text"><b>¡Imagínate cuántos recuerdos brillan en las noches!</b></p>
            </div>
          </div>
        </div>
      )
    }
    if (id === 'mouse') {
      return(
        <div>
          <div className="padding col-md-12" style={{width: '100%'}}>
            <img src={mouse} className="card-image" alt="..."/>
            <div className="card-body body-mouse">
              <p className="card-text">
                El ratoncito de los dientes viene de un mundo donde existen ratoncitos viejitos,
                familias y con la ayuda de los dientitos, él los aydua a fabricar sus casitas y objetos
              </p>
              <p className="card-text">Los dientitos de leche son los más fuertes y duraderos.</p>
              <p className="card-text"><b>¡Él es un ratoncito muy bondadoso!</b></p>
            </div>
          </div>
        </div>
      )
    }
    if (id === 'custom') {
      return(
        <div>
          <div className="container-fluid d-md-block d-lg-none d-xl-none">
            <div className="card-custom">
              <img src={custom} alt="" className="card-img-top"/>
              <img src={unicorn} alt="" className="card-img-top"/>
              <div className="card-body-custom">
                <p className="card-text text-center">La personalización es de la temática que desees, aquí el único límite, es tu imaginación.</p>
                <p className="card-text text-center">El ratón ama visitar a las princesas, super heroés, futbolistas, pilotos, bailarinas, deportistas,
                músicos y todos los pequeños que tienen un talento especial.</p>
                <p className="card-text text-center">Cuenta con la guía de un profesional para que quede espectacular.</p>
                <p className="card-text text-center">¡Nos encantaría planear y saber cómo quieres tu puertita!</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (id === 'how it works') {
      return(
        <div>
          <div className="container-fluid">
            <div style={{width:'100%'}}>
              <div className="card-body-how">
                <p style={{color:'#9e005d'}} className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p style={{color:'#9e005d'}} className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <div className="container-fluid col-xl-6 col-sm-12 col-md-12">
          <div className="card card-custom card-catalog">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body body-catalog">
              <h5 className="card-title">{title}</h5>
              <p className="card-text-catalog">
                {text}
              </p>
              <button className='btn btn-info'>Go somewhere</button>
            </div>
          </div>
        </div>
      )
    }
  }
}
