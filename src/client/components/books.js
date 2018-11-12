import React, { Component, Fragment } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { handle_GoogleBooks_API_Request } from '../api.js';
import ReusableBook from './reusableBook.js';

class Books extends Component {
  state = {
    allBooks: [],
    searchInput: '',
    error: false,
  };

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  validate(event) {
    event.preventDefault();
    let characters = /^[0-9a-zA-Z\s]+$/;
    if (this.state.searchInput.trim().length === 0) {
      return this.setState({ error: true });
    }
    if (!this.state.searchInput.match(characters)) {
      return this.setState({ error: true });
    }
    return this.handleSubmit(event);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const books = await handle_GoogleBooks_API_Request(this.state.searchInput);
    this.setState({ allBooks: books.items, error: false });
  }

  render() {
    const books = this.state.allBooks;
    const error = this.state.error;
    return (
      <Fragment>
        <form>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleChange.bind(this)}
            placeholder="Search by author, title, keywords"
          />
          <Button
            type="submit"
            onClick={this.validate.bind(this)}
            icon
            inverted
          >
            <Icon name="search" color="black" size="large" />
          </Button>
        </form>
        {error && <p>please insert valid input</p>}
        <Item.Group divided>
          {books.length
            ? books.map(book => {
                return (
                  <Item key={book.id} className="book_container">
                    <ReusableBook book={book} />
                  </Item>
                );
              })
            : null}
        </Item.Group>
      </Fragment>
    );
  }
}

export default Books;
