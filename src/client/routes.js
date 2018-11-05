import React from 'react';
import { withRouter, Route, Switch } from 'react-router';
import Books from './components/Books';
import SingleBook from './components/SingleBook';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/:bookTitle" component={SingleBook} />
    </Switch>
  );
};

export default Routes;
