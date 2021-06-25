import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Grid from "./forms";
import Audi from "./components/Audi"
import Demo from "./components/demo"
import Navbar from "./components/navbar"
import Body1 from "./components/Body1"
import Body2 from "./components/Body2"
import Footer from "./components/footer"
import Latest from "./components/latest"
import "./app.css"

//import ScrollableFeed from 'react-scrollable-feed'

class App extends Component {
    render() { 
        return ( 
           
           <div style={{overflow: 'auto'}}>
                <Navbar />
                <Body1/>
              <Grid/>
                <Demo/>
                
                <Audi/>
                <Latest/>
                <Footer/>

                </div>
          
        
         );
    }
}
 
export default App;