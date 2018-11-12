import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ReusableBook from './reusableBook';

const SingleBook = props => {
  const { book } = props.location.state;

  return (
    <Fragment>
      <Link to="/" style={{ textAlign: 'right' }}>
        back to search
      </Link>
      <br />
      <br />
      <Item className="single_book">
        <ReusableBook book={book} />
        <Item.Description>{book.volumeInfo.description}</Item.Description>
        <br />
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
