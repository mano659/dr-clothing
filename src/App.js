import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component={HatsPage}></Route>
    </div>
  );
}

export default App;
