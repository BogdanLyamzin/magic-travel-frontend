import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';
import  SpecialTours  from '../../client/SpecialTours/pages/SpecialTours';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ExamplePage />
      </Route>
      <Route exact path="/foo">
        <p>BAR</p>
      </Route>
      <Route exact path="/st">
        <SpecialTours/>
      </Route>
    </Switch>
  );
};
