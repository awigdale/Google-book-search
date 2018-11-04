import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.searchInput
      }&startIndex=0&maxResults=15`
    );
    this.setState({ allBooks: data.items });
  }

  render() {
    const books = this.state.allBooks;
    return (
      <Fragment>
        <form>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleChange.bind(this)}
            placeholder="Search by author, title, keywords"
          />
          <button id="submit" onClick={this.handleSubmit.bind(this)}>
            search
          </button>
        </form>
        {books.length ? (
          books.map(book => {
            return (
              <div key={book.id}>
                <Link
                  to={{
                    pathname: `/${book.volumeInfo.title}`,
                    state: { book },
                  }}
                  params={{ book: `${book}` }}
                  style={{ textDecoration: 'none' }}
                >
                  <h2>{book.volumeInfo.title}</h2>
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="no image"
                  />
                </Link>
                {book.volumeInfo.publisher && (
                  <p>publisher: {book.volumeInfo.publisher}</p>
                )}
                {book.volumeInfo.authors && (
                  <p>by: {book.volumeInfo.authors.join(',')}</p>
                )}
              </div>
            );
          })
        ) : (
          <div />
        )}
      </Fragment>
    );
  }
}

export default Books;
