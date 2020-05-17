import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import {Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News'
import Contacts from './components/pages/Contact'
import Details from './components/pages/Details'
import NotFoundPage from './components/pages/NotFoundPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/News" component={News}/>
          <Route path="/Contacts" component={Contacts}/>
          <Route path="/Details" component={Details}/>
          <Route  component={NotFoundPage}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
