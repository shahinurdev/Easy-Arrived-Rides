import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';
const Login = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var {displayName,email} = result.user;
    const signInUser={displayName,email}
    setLoggedInUser(signInUser);
    history.replace(from)
    console.log('check User',signInUser);
    
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('error',errorCode,errorMessage,email, credential);
  });
    }
    const handleFbSignIn= () => {
      var fbProvider = new firebase.auth.FacebookAuthProvider();
      firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var {displayName,email} = result.user;
    const signInUser={displayName,email}
    setLoggedInUser(signInUser);
    history.replace(from)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("error",errorCode,errorMessage,email,credential);
  });
    }
   
    return (
        <div className="loginDiv">
            <h3>SignIn with</h3>
            <button onClick={handleGoogleSignIn}>
            <FontAwesomeIcon className="googleIcon" icon={faGoogle} />
            <small>Continue with Google</small>
              </button>
            <br/>
            <br/>
            <button onClick={handleFbSignIn}>
              <FontAwesomeIcon className="fbIcon" icon={faFacebookF} />
              <small>Continue with FaceBook</small>
              </button>
        </div>
    );
};

export default Login;