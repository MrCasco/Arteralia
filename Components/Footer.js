import React, {Component} from 'react'

import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

export class Footer extends Component{

  render(){
    return(
      <div>
        <footer>
          <div className="container-fluid">
            <div id="footer-div">
              <div id="footer-images">
                <a href="https://www.facebook.com/Ideasamantolli/"><img src={facebook} alt=""/></a>
                <a href="https://www.instagram.com/idsamantolli/?hl=es-la"><img src={instagram} alt=""/></a>
                <a href="s"><img src={twitter} alt=""/></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
