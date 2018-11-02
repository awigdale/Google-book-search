import React, { Component, Fragment } from 'react';

class Books extends Component {
  state = {
    allBooks: [],
    searchInput: '',
  };

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSubmit(event) {
    //make api request
  }

  render() {
    return (
      <Fragment>
        <h1>Books</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            search:
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default Books;
