import React, { Component } from 'react';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <hr />
        <br />
        <Routes />
      </div>
    );
  }
}

export default App;
