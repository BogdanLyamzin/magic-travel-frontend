import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';
import  SpecialTours  from '../../client/SpecialTours/pages/SpecialTours';
import  TourPage  from '../../client/TourPage/pages/TourPage';

const cardTemplate = {
  name: "МОРСЬКА РИБАЛКА НА СЕРЕДНЮ РИБУ",
  price: "350",
  description: "",
  buyDay:"['','']",
  keys: "",
  img:"fishing1.jpeg"
}

export const AppRoutes = () => {
  const [card, setCard] = useState(cardTemplate);
  return (
    <Switch>
      <Route exact path="/">
        <ExamplePage />
      </Route>
      <Route exact path="/foo">
        <p>BAR</p>
      </Route>
      <Route exact path="/st">
        <SpecialTours setCard={setCard}/>
      </Route>
      <Route path="/specialtour">
        <TourPage card={card}/>
      </Route>
    </Switch>
  );
};
