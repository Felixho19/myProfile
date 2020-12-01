import React, { Component } from 'react';
import './App.css';
import Pages from './components/Pages';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       webSiteName : "Felix's personal website"
    };
  }
  render() {
    return (
      <div className="App">
        <Pages />
        <Footer />
      </div>
    );
  }
}

export default App;