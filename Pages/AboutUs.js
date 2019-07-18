import React, {Component} from 'react'

import soñadoras from '../images/About Us/foto-nosotras.png'
import fondo_nubes from '../images/About Us/nubes-y-fondo-azul.png'
import avion_papel from '../images/AVION-DE-PAPEL.png'
import soñadoras_texto from '../images/About Us/AVION-DE-PAPEL-CON-TITULO.png'
import clouds from '../images/nubes-y-fondo-azul.png'
import introductionImage from '../images/foto-nosotras.png';
import introductionTitle from '../images/AVION-DE-PAPEL-CON-TITULO.png';
import aImg1 from '../images/a-image-1.jpg';
import aImg2 from '../images/a-image-2.jpg';
import aImg3 from '../images/a-image-3.jpg';
import goForMoreImage from '../images/paginas-web.png';
import pincel  from '../images/foto-de-pincel-y-pintura.png';
import ourBrand from '../images/letrero-nuestra-marca.png';
import manos from '../images/About Us/CIRCULO MANOS.png'

import "../styles/aboutus.css";

export class AboutUs extends Component{
  render(){
    return(
      <div style={{backgroundColor:'white'}}>
        <div className='d-block d-lg-none d-xl-none'>
          <div>
            <img className='fondo-aboutus' src={fondo_nubes} alt=''/>
            <img className='img-aboutus' src={soñadoras} alt=''/>
            <img className='text-soñadoras' src={soñadoras_texto} alt=''/>
          </div>

          <div className='div-avion-papel'>
            <img className='img-avion-papel' alt='' src={avion_papel}/>
          </div>

          <div className="container-fluid text-aboutus">
            <div className='body-mouse text'>
              <p className="card-text">
                Somos un grupo de mujeres creativas con iniciativa emprendedora
                Iniciamos trabajando madre e hija hace 20 años con detalles para nuestras
                fiestas familiares, pero siempre con el conocimiento de artes gráficas,
                costura y pintura, con la multidisciplina de diseño de interiores y diseño gráfico.
              </p>

              <p className="card-text">
                A lo largo de nuestra historia, nos fuimos encontrando mujeres con
                diferentes habilidades, pero todas con una cosa en común:
                <b>TODAS SOMOS MAMÁS</b>, algunas profesionistas, otras amas de casa y
                hasta artesanas, sin embargo, queríamos iniciar algo propio.
              </p>
            </div>
          </div>
      </div>

      {
        //WEB
      }
      <div id="about-us-web" className='d-lg-block d-xl-block d-none'>
          <div id="about-us-web-introduction">
              <div id="about-us-web-cloud-background">
                  <img src={clouds} alt=""/>
              </div>
              <div id="about-us-web-introduction-image">
                  <img src={introductionImage} alt=""/>
              </div>
              <div id="about-us-web-introduction-title">
                  <img src={introductionTitle} alt=""/>
              </div>

              <div className='div-avion-papel'>
                <img className='img-avion-papel' alt='' src={avion_papel}/>
              </div>

              <div id="about-us-web-introduction-paragraph">
                  <p className='text-center'>
                      Somos un grupo de mujeres creativas con iniciativa emprendedora.
                      Iniciamos trabajando Madre e hija hace 20 años con detalles para nuestras fiestas
                      familiares, pero siempre con el conocimiento de artes gráficas, costura y pintura,
                      con la multidisciplina de Diseño de Interiores y Diseñadora Gráfica.
                  </p>
                  <p className='text-center'>
                      A lo largo de nuestra historia nos fuimos encontrando con mujeres con diferentes
                      habilidades, pero todas con una cosa en común "TODAS SOMOS MAMÁS" algunas profesionistas,
                      amas de casa, artesanas, queríamos iniciar algo propio que durante (muchos años nos dedicamos
                      a la industria) sacrificamos tiempo con nustros pequeños u familia (sin duda todas nuestras
                      creaciones han sido siempre la inspiración hacia ellos)-
                  </p>
              </div>
          </div>
          <div id="about-us-web-social-proyect">
              <div id="about-us-web-social-proyect-title">
                  <h2>Proyecto Social</h2>
              </div>
              <div id="about-us-web-social-proyect-container">
                  <div className="social-proyect-image">
                      <img src={aImg1} alt=""/>
                  </div>
                  <div className="social-proyect-image">
                      <img src={aImg2} alt=""/>
                  </div>
                  <div className="social-proyect-image">
                      <img src={aImg3} alt=""/>
                  </div>
              </div>

              <div className='div-manos'>
                <img className='img-manos' alt='' src={manos}/>
              </div>

              <div id="about-us-web-social-proyect-paragraph">
                  <h3 style={{color:'#737478'}} className='text-center'>
                      ¡Nuestro Proyecto es crecer!
                  </h3>
                  <p>
                      Nuestro trabajo fue destacandose, pero llegó el momento de crecer y necesitar
                      manos que nos puedan ayudar, empezamos a conocer más mujeres maravillosas que tenían
                      habilidades diferentes con las manualidades, algunas siendo amas de casa otras profesionistas,
                      nos dimos cuenta que teníamos todas en común, seguimos siendo mamás.
                  </p>
                  <p>
                      Decidimos realizar un producto en el que intervinieramos todas, entre ellos carpinteros, crear algo tangible
                      que prevaleciera la magia y los valores, y así fue como hicimos nuestras puertitas del ratón y hada
                      de los dientes, primero para nuestros pequeños. Con la colaboración de todas pulimos nuestra idea.
                  </p>
              </div>
          </div>
          <div id="about-us-web-go-for-more-container">
              <div id="about-us-web-go-for-more-text-container">
                  <h2 id="about-us-web-go-for-more-text-title">
                      Vamos por mas
                  </h2>
                  <p id="about-us-web-go-for-more-text-paragraph">
                      Gracias a nuestra familia y amistades que nos impulsaron para salir a la venta en
                      público en bazares y exposiciones, estamos muy emocionadas de ver que nuestras creaciones
                      les gustaban al público, así fue como decidimos vender en tiendas web reconocidas como
                      Amazon y Mercado Libre, fue como un sueño llegar a toda la República Mexicana, y se hizo
                      realidad.
                  </p>
              </div>
              <div id="about-us-web-go-for-more-image">
                  <img src={goForMoreImage} alt=""/>
              </div>
          </div>
          <div id="about-us-web-our-brand">
            <img src={pincel} alt="" id="about-us-web-our-brand-image"/>
            <img src={ourBrand} alt="" id="about-us-web-our-brand-text-image"/>
            <div id="about-us-web-our-brand-text">
              <p>
                A principios del 2019 decidimos registrar nuestra marca como
                "ARTERALIA" como tienda de diseño guiada por un profesional con la experiencia
                de una artesana, ampliando nuestros servicios, dedicándonos a Diseño de Eventos,
                Regalos SUPER PERSONALIZADOS, Invitaciones, nuestras Puertas de Ratón y Hada de
                los dientes, todas las secciones relacionadas con nuestra formación multidisciplinaria
                y experiencia laboral.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
