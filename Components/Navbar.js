import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo letras blancas.svg'
export class Navbar extends Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to = '/'
            >
              <img className="top-left-logo" src={logo} alt="" height="80px"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100 order-3 dual-collapse2" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to = '/Catalog/'
                  >
                    Cat&aacute;logo<span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item active">
                <Link
                  className="nav-link"
                  to = '/AboutUs'
                >
                  Acerca de nosotras<span className="sr-only">(current)</span>
                </Link>
                </li>
                <li className="nav-item active">
                <Link
                  className="nav-link"
                  to = '/Contact'
                >
                  Contáctanos<span className="sr-only">(current)</span>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
