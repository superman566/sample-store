import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {ButtonsContainer, SignInContainer} from "./sign-in.styles";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [ userCredentials, setCredentials] = useState({email: '', password: ''});
  const {
    email,
    password
  } = userCredentials;
  const handleChange = e => {
    const {
      value,
      name
    } = e.target;
    setCredentials({...userCredentials, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput
          label='email'
          name='email'
          type={'email'}
          value={email}
          handleChange={ handleChange }
          required
        />
        <FormInput
          label='password'
          name='password'
          type='password'
          value={password}
          handleChange={ handleChange }
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
