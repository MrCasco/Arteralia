import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import {Navbar} from './Components/Navbar'
import {Footer} from './Components/Footer'

import {Home} from './Pages/Home'

import {Pagination} from './Components/Pagination'

import {AboutUs} from './Pages/AboutUs'
import {Contact} from './Pages/Contact'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import './fonts/stylesheet.css';

class App extends Component {
  render(){
    return (
      <div className="App">

        <Navbar/>

        <Switch>
          <Route exact path = '/' component = {Home} />

          <Route path = '/Catalog/'  component = {Pagination} />

          <Route path = '/AboutUs' component = {AboutUs} />
          <Route path = '/Contact' component = {Contact} />
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default App;
