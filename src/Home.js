// Home.js
import React, { Component } from 'react';
import homeImage from './home.jpg'
import './home.css'
class Home extends Component {
  render() {
    return (

    <div className="image-container" >
    <img src={homeImage} alt="Logo" className="background-image" />

    <div className="text-overlay">
    <div className="textBox">
    <h1>Today's standout star</h1>
    <p>''  Discover what everyone's raving about ''</p>

  </div>
  
</div>

<div>
<img src={homeImage} alt="Logo" className="imageTypeRow" />
<img src={homeImage} alt="Logo" className="imageTypeRow" />
<img src={homeImage} alt="Logo" className="imageTypeRow" />
</div>

    </div>
    );
  }
}

export default Home;
