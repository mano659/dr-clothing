import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shop";
import LoginPage from "./pages/loginpage/loginpage";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/hats" component={HatsPage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
