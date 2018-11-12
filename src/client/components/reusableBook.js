import React, { Fragment } from 'react';
import { Image, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ReusableBook = props => {
  const { book } = props;
  return (
    <Fragment>
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
        {book.volumeInfo.authors && (
          <Item.Meta>by: {book.volumeInfo.authors.join(',')}</Item.Meta>
        )}
        {book.volumeInfo.publisher && (
          <Item.Meta>publisher: {book.volumeInfo.publisher}</Item.Meta>
        )}
      </Item.Content>
    </Fragment>
  );
};

export default ReusableBook;
