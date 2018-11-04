import React, { Fragment } from 'react';

const SingleBook = props => {
  const { book } = props.location.state;
  return (
    <Fragment>
      <h1>{book.volumeInfo.title}</h1>
      <img src={`${book.volumeInfo.imageLinks.thumbnail}`} />
      {book.volumeInfo.authors && (
        <h3>by: {book.volumeInfo.authors.join(',')}</h3>
      )}
      {book.volumeInfo.averageRating && (
        <h3>
          rating: {book.volumeInfo.averageRating}
          /5
        </h3>
      )}
      {book.volumeInfo.publisher && (
        <div>
          <h3>publisher: {book.volumeInfo.publisher}</h3>
          <p>published date: {book.volumeInfo.publishedDate}</p>
        </div>
      )}
      <p>{book.volumeInfo.description}</p>
      <br />
      <a href={`${book.volumeInfo.previewLink}`}>preview here</a>
      <a href={`${book.volumeInfo.infoLink}`}>purchase on google here</a>
    </Fragment>
  );
};

export default SingleBook;
