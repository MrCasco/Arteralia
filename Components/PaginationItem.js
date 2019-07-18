import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export class PaginationItem extends Component{
  static propTypes = {
    id : PropTypes.string,
    isOn: PropTypes.bool,
  }

  render(){
    const {id, isOn} = this.props
    return(
      <div onClick={this.handleButton}>
        <li className={`page-item ${isOn?' active':''}`}>
          <Link
            to = {id==='1' ?`/`  : `/${id}`}
            className="page-link">{id}
          </Link>
        </li>
      </div>
    )
  }
}
