import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Books extends Component {
  state = {
    allBooks: [],
    searchInput: '',
  };

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`
    );
    this.setState({ allBooks: data.items });
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
