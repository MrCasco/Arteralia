import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import {PaginationItem} from './PaginationItem.js';

import {MainCatalog} from './MainCatalog';
import {Catalog2} from './Catalog2';
import {Catalog3} from './Catalog3';

export class Pagination extends Component{
  state={
    current: '1',
  }

  handleState = e =>{
    this.setState({
      current: e.currentTarget.dataset.div_id
    })
    console.log(this.state.current);
  }

  render(){
    return(
      <div style={{backgroundColor:'white'}}>
        <HashRouter>
          <Route exact path = '/'  component = {MainCatalog} />
          <Route exact path = '/2' component = {Catalog2} />
          <Route exact path = '/3' component = {Catalog3} />
          <nav>
            <ul className="pagination pagination-lg justify-content-center">
              <div data-div_id='1' onClick={this.handleState}>
                <PaginationItem
                  isOn = {this.state.current === '1'?true:false}
                  id = '1'
                />
              </div>

              <div data-div_id='2' onClick={this.handleState}>
                <PaginationItem
                  isOn = {this.state.current === '2'?true:false}
                  id = '2'
                />
              </div>

              <div data-div_id='3' onClick={this.handleState}>
                <PaginationItem
                  isOn = {this.state.current === '3'?true:false}
                  id = '3'
                />
              </div>
            </ul>
          </nav>
        </HashRouter>
      </div>
    )
  }
}
