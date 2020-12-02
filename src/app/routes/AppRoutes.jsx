import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from '../../shared/components/Error/Error';
import ListsCountry from '../../shared/components/ItemsCountry';
import ItemCountry from '../../shared/components/ItemCountry';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/404">
        {' '}
        <Error404 />
      </Route>

      <Route exact path="/">
        {' '}
        <ListsCountry />
      </Route>

      <Route exact path="/ItemCountry/:id" render={() => <ItemCountry />} />
      <Route exact path="/foo">
        <p>BAR</p>
      </Route>
    </Switch>
  );
};
