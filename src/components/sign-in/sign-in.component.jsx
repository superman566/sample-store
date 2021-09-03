import React from "react";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {ButtonsContainer, SignInContainer} from "./sign-in.styles";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const {
      value,
      name
    } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password
    } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput
            label='email'
            name='email'
            type={'email'}
            value={this.state.email}
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            label='password'
            name='password'
            type='password'
            value={this.state.password}
            handleChange={ this.handleChange }
            required
          />
          <ButtonsContainer>
            <CustomButton
              type='submit'
            >Sign In
            </CustomButton>
            <CustomButton
              type={'button'}
              isGoogleSignIn
              onClick={googleSignInStart}
            >Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
