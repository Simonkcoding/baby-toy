import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar/navbar'
import Babytoy from './components/babytoy/babytoy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Babytoy/>
      </div>
    );
  }
}

export default App;
