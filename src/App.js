
import './App.css';
import React, { createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return( 
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name: {loggedInUser.displayName}</p>
    <Router>
      <div>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
