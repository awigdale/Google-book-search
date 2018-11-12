import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Item, Image, Button, Icon } from 'semantic-ui-react';
import { handle_GoogleBooks_API_Request } from '../api.js';

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
    if (this.state.searchInput === '') {
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
                    {book.volumeInfo.imageLinks && (
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={`${book.volumeInfo.title} image`}
                      />
                    )}
                    <Item.Content>
                      <Item.Header>
                        <Link
                          to={{
                            pathname: `/${book.volumeInfo.title}`,
                            state: { book },
                          }}
                          id="title"
                        >
                          {book.volumeInfo.title}
                        </Link>
                      </Item.Header>
                      {book.volumeInfo.publisher && (
                        <Item.Meta>
                          publisher: {book.volumeInfo.publisher}
                        </Item.Meta>
                      )}
                      {book.volumeInfo.authors && (
                        <Item.Meta>
                          by: {book.volumeInfo.authors.join(',')}
                        </Item.Meta>
                      )}
                    </Item.Content>
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
