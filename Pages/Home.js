import React, {Component} from 'react';
import {Card} from '../Components/Card.js';
import {Image} from '../Components/Image.js'
import {ImageTitle} from '../Components/ImageTitle.js'
import {ContactForm} from '../Components/ContactForm.js'
import {Contact} from '../Pages/Contact.js'

import purp_door from '../images/puertas/c-image-3.jpg'
import slider1 from "../images/slider1.svg";
import slider2 from "../images/slider2.svg";
import slider3 from "../images/slider3.svg";
import ourClassics from "../images/nuestras-clasicas.svg";
import classicImage1 from "../images/c-image-1.jpg";
import classicImage2 from "../images/c-image-2.jpg";
import classicImage3 from "../images/c-image-3.jpg";
import charactersTitleImage from "../images/titulo-personajes.svg";
import elfo from "../images/elfo.png";
import hada from "../images/hada.png";
import ratoncito from "../images/ratoncito.png";
import pImage1 from "../images/p-image-1.jpg";
import pImage2 from "../images/p-image-2.jpg";
import pImage3 from "../images/p-image-3.jpg";
import pImage4 from "../images/p-image-4.jpg";
import pImage5 from "../images/p-image-5.jpg";
import pImage6 from "../images/p-image-6.jpg";
import pImage7 from "../images/p-image-7.jpg";
import avion from "../images/avion.svg";

import "../styles/home.css";
import '../styles/homepage.css';

export class Home extends Component{
  render(){
    return(
      <div>
        <div className={window.location.href === 'http://arteralia.com.mx/?sent/' ? 'confirmation-box btn-success d-block':'d-none'}>Correo enviado</div>
        <div className='d-block d-lg-none d-xl-none'>
          <ImageTitle
            id = 'adondevan'
          />

          <Image
            id = {purp_door}
          />

          <Card
            id = 'how it works'
            image = {null}
          />

          <ImageTitle
            id = 'quienvisita'
          />

          <Card
            id = 'mouse'
            image = {null}
          />

          <Card
            id = 'fairy'
            image = {null}
          />

          <Card
            id = 'elf'
            image = {null}
          />

          <Card
            id = 'custom'
            image = {null}
          />

          <ContactForm/>
        </div>

        {
          //WEB
        }
        <div id="home" className='d-none d-lg-block d-xl-block'>
          <div id="carousel-main-images" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carousel-main-images" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-main-images" data-slide-to="1"></li>
                  <li data-target="#carousel-main-images" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active" data-interval='2100'>
                      <img src={slider1} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item" data-interval='2100'>
                      <img src={slider2} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item" data-interval='2100'>
                      <img src={slider3} className="d-block w-100" alt="..."/>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carousel-main-images" role="button"
                 data-slide="prev">
                  <span style={{height:'100%'}} className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span style={{height:'100%'}} className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-main-images" role="button"
                 data-slide="next">
                  <span style={{height:'100%'}} className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span style={{height:'100%'}} className="sr-only">Next</span>
              </a>
          </div>
          <div className="container " id="our-classics">
              <div className="row">
                  <div className="col" id="our-classics-title">
                      <img id="our-classics-title-image" src={ourClassics} alt=""/>
                  </div>
              </div>
              <div className="row">
                  <div className="col" id="our-classics-container">
                      <div className="container">
                          <div className="row">
                              <div className="col">
                                <img className="rounded img-fluid our-classics-img" src={classicImage1} alt=""/>
                                <span><br/></span>
                                <div id='text-image-4-web'>
                                  <h3>
                                    <span><br/></span>
                                    El ratoncito y el hada no tendrán que
                                    cuidarse más de que puedas aplastarlos o
                                    que puedas despertar sin que te des cuenta
                                    que ellos llegaron a visitarte.
                                    <span><br/></span>
                                    <span style={{color:'yellow'}}>.</span>
                                  </h3>
                                </div>
                              </div>

                              <div className="col">
                                <img className="rounded img-fluid our-classics-img" src={classicImage2} alt=""/>
                                <span><br/></span>
                                <div id='text-image-1-web'>
                                  <h3>
                                    <span><br/></span>
                                    Todas nuestras puertitas son
                                    abatibles y cuentan con accesorios
                                    como portadientes, buzón y certificados
                                    para facilitarles el trabajo de ir por
                                    tu dientito.
                                    <span><br/></span>
                                    <span style={{color:'#88D0EA'}}><br/></span>
                                  </h3>
                                </div>
                              </div>

                              <div className="col">
                                <img className="rounded img-fluid our-classics-img" src={classicImage3} alt=""/>
                                <span><br/></span>
                                <div id='text-image-2-web'>
                                  <h3>
                                    <span><br/></span>
                                    El ratoncito y el hada no tendrán que
                                    cuidarse más de que puedas aplastarlos o
                                    que puedas despertar sin que te des cuenta
                                    que ellos llegaron a visitarte.
                                    <span><br/></span>
                                    <span style={{color:'#F9D0FD'}}>.</span>
                                  </h3>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {
            //Characters
          }
          <div className="container d-none d-lg-block" id="characters">
              <div className="row">
                  <div className="col">
                      <img id="characters-title-image-web" src={charactersTitleImage} alt=""/>
                  </div>
              </div>
              <div className="row">
                  <div className="col" id="characters-container-web">
                      <div className="container-fluid">
                          <div className="row d-flex justify-content-center">
                              <div className="col character-col">
                                  <div className="option">
                                      <img className="character-image-web" id="first-image-web" src={ratoncito} alt=""/>
                                          <div className='triangle-blue pane-text-web'></div>
                                          <div id="text-image-1-web" className='pane-text-web'>
                                              <span><br/></span>
                                              <p>
                                                El ratoncito de los dientes viene de un mundo donde existen ratoncitos viejitos,
                                                familias y con la ayuda de los dientitos, él los aydua a fabricar sus casitas y objetos
                                              </p>
                                              <p>Los dientitos de leche son los más fuertes y duraderos.</p>
                                              <p><b>¡Él es un ratoncito muy bondadoso!</b></p>
                                          </div>
                                  </div>
                              </div>
                              <div className="col character-col">
                                  <div className="option" id="second-option">
                                      <img className="character-image-web" id="second-image-web" src={hada} alt=""/>
                                          <div className='triangle-purple pane-text-web'></div>
                                          <div id="text-image-2-web" className="pane-text-web">
                                              <span><br/></span>
                                              <p>
                                                El hada de los dientes es una princesa de las hadas, ama venir al mundo de los niños por
                                                los dientitos y dejarlos en el cielo para que brillen como estrellas y recordar la infancia
                                                de cada pequeño.
                                              </p>
                                              <p><b>¡Imagínate cuántos recuerdos brillan en las noches!</b></p>
                                          </div>
                                  </div>
                              </div>
                              <div className="col character-col">
                                  <div className="option" id="third-option">
                                      <img className="character-image-web" id="third-image-web" src={elfo} alt=""/>
                                          <div className='triangle-orange pane-text-web'></div>
                                          <div id="text-image-3-web" className="pane-text-web">
                                              <span><br/></span>
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et
                                                  inventore ipsa iste laboriosam, quis.
                                              </p>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {
            //Personalize
          }
          <div id="personalize">
            <div id="carousel-pane">
              <div id="homepage-carousel-2" className="carousel slide d-block w-100" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#homepage-carousel-2" data-slide-to="0" className="active"></li>
                    <li data-target="#homepage-carousel-2" data-slide-to="1"></li>
                    <li data-target="#homepage-carousel-2" data-slide-to="2"></li>
                    <li data-target="#homepage-carousel-2" data-slide-to="3"></li>
                    <li data-target="#homepage-carousel-2" data-slide-to="4"></li>
                    <li data-target="#homepage-carousel-2" data-slide-to="5"></li>
                    <li data-target="#homepage-carousel-2" data-slide-to="6"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval='3000'>
                        <img className="d-block w-100" src={pImage1} alt="Gato"/>
                    </div>
                    <div className="carousel-item" data-interval='3000'>
                        <img className="d-block w-100" src={pImage2} alt="Gato"/>
                    </div>
                    <div className="carousel-item"data-interval='3000'>
                        <img className="d-block w-100 img-fluid" src={pImage3} alt="Gato"/>
                    </div>
                    <div className="carousel-item"data-interval='3000'>
                        <img className="d-block w-100 img-fluid" src={pImage4} alt="Gato"/>
                    </div>
                    <div className="carousel-item"data-interval='3000'>
                        <img className="d-block w-100" src={pImage5} alt="Gato"/>
                    </div>
                    <div className="carousel-item"data-interval='3000'>
                        <img className="d-block w-100" src={pImage6} alt="Gato"/>
                    </div>
                    <div className="carousel-item"data-interval='3000'>
                        <img className="d-block w-100" src={pImage7} alt="Gato"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#homepage-carousel-2" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#homepage-carousel-2" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div id="personalize-label">
              <div className="">
                  <img src={avion} alt=""/>
                  <p>La personalización es de la temática que desees aquí el único límite es tu
                      imaginación.</p>
                  <br/>
                  <p>El ratón ama visitar a las princesas, super heroés, futbolistas, automoviles,
                      bailarinas, deportistas,
                      músicos y todos los pequeños que tienen un talento especial.</p>
                  <p>Cuenta con la guía de un profesional para que quede espectacular.</p>
                  <br/>
                  <p><b>¡Nos encantaría saber y planear contigo cómo quieres tu puertita!</b></p>
                  <br/>
              </div>
            </div>
          </div>

          <div id="separator"></div>

          {
            //Contact
          }

          <Contact/>
      </div>
      </div>
    );
  }
}
