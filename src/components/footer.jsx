import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
  
  render() { 
    return ( <div class="container">
    <div class="row">
        <div class="col-md-12">
            <footer class="footer">				
      <div class="container">
        <div class="row">
          <div class="col-md-3 m-b-30">
            <div class="footer-title m-t-5 m-b-20 p-b-8">
              About us
            </div>	
            <p class="white-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
            </p>
          </div>
          <div class="col-md-3 m-b-30">
            <div class="footer-title m-t-5 m-b-20 p-b-8">
              Latest themes
            </div>	
            <div class="footer-links">
              <a href="#">
                Appointment
              </a>
              <a href="#">
                Health center
              </a>
              <a href="#">
                Quality
              </a>
              <a href="#">
                Wallstreet
              </a>
            </div>
          </div>
          <div class="col-md-3 m-b-30">
            <div class="footer-title m-t-5 m-b-20 p-b-8">
              Quick Links
            </div>	
            <div class="footer-links">
              <a href="#">
                Blog
              </a>
              <a href="#">
                FAQ
              </a>
              <a href="#">
                Terms & conditions
              </a>
              <a href="#">
                Privacy policy
              </a>
            </div>
          </div>
          <div class="col-md-3 m-b-30">
            <div class="footer-title m-t-5 m-b-20 p-b-8">
              Support
            </div>	
            <div class="footer-links">
              <a href="#">
                Affiliate
              </a>
              <a href="#">
                Login
              </a>
              <a href="#">
                All theme package
              </a>
              <a href="#">
                Support forum
              </a>
            </div>
            <br/> <br/>
          
          </div>
        </div>
      </div>
    </footer>
    <div class="footer-bottom">
      Copyright ?? 2017, All Rights Reserved
    </div>
        </div>
    </div>
  </div> );
  }
}
 
export default Footer;