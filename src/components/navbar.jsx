import React, { Component } from 'react'
import "./navbar.css"

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
         <nav>
  <a href="#">HOME</a>
  <a href="#">AUCTIONS</a>
  <a href="#">VENDORS</a>
  <a href="#">BLOGGERS</a>
  <a href="#">MEDIA</a>
  <a href="#">ABOUT</a>
  <a href="#">CONTACT</a>
  <a href="#">PAGES</a>
  <div id="indicator"></div>
</nav>

            </div>
         );
    }
}
 
export default Navbar;