import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from './components/books';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
    </Switch>
  );
};

export default Routes;
