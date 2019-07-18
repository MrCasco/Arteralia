import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class Image extends Component{
  static propTypes = {
    id : PropTypes.string,
  }

  render(){
    const {id} = this.props
    return(
      <div>
        <div className="text-center d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
          <img src={id} className="img-fluid" alt=""/>
        </div>
      </div>
    )
  }
}
