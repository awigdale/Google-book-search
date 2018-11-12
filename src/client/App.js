import React, { Component } from 'react';
import Routes from './routes';
import ErrorBoundary from './components/errorBoundary';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <hr />
        <br />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
