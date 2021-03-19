import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
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
    return (
        <div>
            <h3>Login</h3>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;