import React, { Component } from 'react';

import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Features/>
        <Footer/>
      </div>
    );
  }
}

export default App;
