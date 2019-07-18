import React, {Component} from 'react';

import {Card} from '../Components/Card.js';
import {ImageTitle} from '../Components/ImageTitle.js'

import '../fonts/stylesheet.css'

import guitar from '../images/puertas/p-image-1.jpg'
import pink_mouse from '../images/puertas/p-image-3.jpg'
import football from '../images/puertas/p-image-6.jpg'

export class Catalog2 extends Component{
  render(){
    return(
      <div>
        <div className='row'>
          <ImageTitle
            id = 'adondevan'
          />

          <Card
            id = 'catalog'
            image = {guitar}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {pink_mouse}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />

          <Card
            id = 'catalog'
            image = {football}
            title = 'Im a title test as well'
            text = 'Im a test text hello'
          />
        </div>
      </div>
    );
  }
}
