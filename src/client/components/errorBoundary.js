import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    return this.setState({ hasError: true, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, something went wrong.</h2>
          <p>Our team has been notified, please check back later</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
