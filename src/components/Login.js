import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook, startLoginWithGithub } from '../actions/auth';

export const Login = ({ startLoginWithGoogle, startLoginWithFacebook, startLoginWithGithub }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Get your expenses under control.</p>

        <button className="button--social button--google" onClick={startLoginWithGoogle}>
          <img className="icon--social" src="../images/google.svg" alt="Google Logo" />
           Sign in with Google
        </button> 
        <button className="button--social button--facebook" onClick={startLoginWithFacebook}>
          <img className="icon--social" src="../images/facebook_logo.png" alt="Facebook Logo" />
           Sign in with Facebook
        </button>      
        <button className="button--social button--github" onClick={startLoginWithGithub}>
          <img className="icon--social" src="../images/github.svg" alt="Github Logo" />
          Sign in with Github
        </button>
      </div>      
    </div>
  ); 
}

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
  startLoginWithGithub: () => dispatch(startLoginWithGithub())
});

export default connect(undefined, mapDispatchToProps)(Login);