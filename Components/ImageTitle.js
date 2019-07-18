import React, {Component} from 'react';
import PropTypes from 'prop-types'

import adondevan from '../images/corregido2 adonde van.svg'
import quienvisita from '../images/titulo-personajes.svg'

export class ImageTitle extends Component{
  static propTypes = {
    id : PropTypes.string,
    image: PropTypes.string,
  }

  render(){
    const {id, image} = this.props
    if (id === 'adondevan') {
      return(
        <div>
          <div id="characters-title" className="d-block d-lg-none d-xl-none">
            <div className="characters-title-panel-adondevan">
              <img id="characters-title-image" src={adondevan} alt=""/>
            </div>
          </div>
        </div>
      )
    }
    if (id === 'quienvisita') {
      return(
        <div>
          <div id="characters-title" className="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div className="characters-title-panel">
              <img id="characters-title-image" src={quienvisita} alt=""/>
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <div>
          <div id="characters-title" className="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div className="characters-title-panel">
              <img id="characters-title-image" src={image} alt=""/>
            </div>
          </div>
        </div>
      )
    }
  }
}
