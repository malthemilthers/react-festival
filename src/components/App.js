import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header';
import Program from './Program';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header title="Welcome to the Twisting Feather Festival!"/>
        
        <Program />

      </div>
    );
  }
}

export default App;
