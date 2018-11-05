import React from 'react';
import { Route, Switch } from 'react-router';
import Books from './components/Books.js';
import SingleBook from './components/SingleBook.js';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/:bookTitle" component={SingleBook} />
    </Switch>
  );
};

export default Routes;
