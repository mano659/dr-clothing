import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./log-in.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.isSignInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Log in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Log In</CustomButton>
            <CustomButton
              id="login-google"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Log In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
