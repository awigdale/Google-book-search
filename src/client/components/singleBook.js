import React, { Fragment } from 'react';
import { Item, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SingleBook = props => {
  const { book } = props.location.state;

  return (
    <Fragment>
      <Link to="/">back to search</Link>
      <br />
      <Item className="single_book">
        {book.volumeInfo.imageLinks && (
          <Image
            size="small"
            src={`${book.volumeInfo.imageLinks.thumbnail}`}
            alt=""
            centered
          />
        )}
        <Item.Content>
          <h2>{book.volumeInfo.title}</h2>
          {book.volumeInfo.authors && (
            <Item.Meta>by: {book.volumeInfo.authors.join(',')}</Item.Meta>
          )}
          {book.volumeInfo.averageRating && (
            <Item.Meta>
              rating: {book.volumeInfo.averageRating}
              /5
            </Item.Meta>
          )}
          {book.volumeInfo.publisher && (
            <Fragment>
              <Item.Meta>publisher: {book.volumeInfo.publisher}</Item.Meta>
              <Item.Meta>
                published date: {book.volumeInfo.publishedDate}
              </Item.Meta>
            </Fragment>
          )}
          <Item.Description>{book.volumeInfo.description}</Item.Description>
          <br />
        </Item.Content>
        <a href={`${book.volumeInfo.previewLink}`} className="single_book_link">
          preview here
        </a>
        <a href={`${book.volumeInfo.infoLink}`} className="single_book_link">
          purchase on google here
        </a>
      </Item>
    </Fragment>
  );
};

export default SingleBook;
