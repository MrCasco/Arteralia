
import React, {Component} from 'react';

import {Card} from '../Components/Card.js';
import {ImageTitle} from '../Components/ImageTitle.js'

import esgrima from '../images/puertas/p-image-2.jpg'
import lambo from '../images/puertas/p-image-4.jpg'
import pink_crown from '../images/puertas/p-image-5.jpg'

export class Catalog3 extends Component{
  render(){
    return(
      <div>
        <div className='row'>
          <ImageTitle
            id = 'adondevan'
          />

          <Card
            id = 'catalog'
            image = {esgrima}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {lambo}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {pink_crown}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />
        </div>
      </div>
    );
  }
}
