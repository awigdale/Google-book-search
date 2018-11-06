import React from 'react';
import { Route, Switch } from 'react-router';
import Books from './components/books.js';
import SingleBook from './components/singleBook.js';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/:bookTitle" component={SingleBook} />
    </Switch>
  );
};

export default Routes;
