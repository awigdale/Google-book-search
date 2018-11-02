import React from 'react';
import { Route, Switch } from 'react-router';
import Books from './components/books';
import SingleBook from './components/singleBook';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/detailedBook" component={SingleBook} />
    </Switch>
  );
};

export default Routes;
