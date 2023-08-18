import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ClickClickClick,
  EventForm,
  Home,
  ImageAndNewsletter,
  OddEvenPrime,
  RandomColorGenerator,
  RandomColorPallete1,
  RandomColorPallete2,
  UserCard,
  WorldPopulation,
} from "./components";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/ClickClickClick" Component={ClickClickClick} />
      <Route exact path="/EventForm" Component={EventForm} />
      <Route exact path="/ImageAndNewsletter" Component={ImageAndNewsletter} />
      <Route exact path="/OddEvenPrime" Component={OddEvenPrime} />
      <Route
        exact
        path="/RandomColorGenerator"
        Component={RandomColorGenerator}
      />
      <Route
        exact
        path="/RandomColorPallete1"
        Component={RandomColorPallete1}
      />
      <Route
        exact
        path="/RandomColorPallete2"
        Component={RandomColorPallete2}
      />
      <Route exact path="/UserCard" Component={UserCard} />
      <Route exact path="/WorldPopulation" Component={WorldPopulation} />
    </Routes>
  );
};

export default App;
