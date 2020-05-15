import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Footer/>
      </div>
    )
  }
}
