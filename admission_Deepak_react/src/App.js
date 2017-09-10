import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './header_footer.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

export default App;
