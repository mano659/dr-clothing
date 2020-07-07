import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shop";
import LoginPage from "./pages/loginpage/loginpage";
import Header from "./components/header/header";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
