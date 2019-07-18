import React, {Component} from 'react';
import {Card} from '../Components/Card.js';
import {ImageTitle} from '../Components/ImageTitle.js'

import unicorn from '../images/puertas/puertas unicornio.jpg'
import blue_white from '../images/puertas/c-image-1.jpg'
import pink_window from '../images/puertas/c-image-2.jpg'
import purp_door from '../images/puertas/c-image-3.jpg'

export class MainCatalog extends Component{
  render(){
    return(
      <div>

        <ImageTitle
          id = 'adondevan'
        />

        <div className='row'>
          <Card
            id = 'catalog'
            image = {unicorn}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {blue_white}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {pink_window}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {purp_door}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />
        </div>
      </div>
    );
  }
}
