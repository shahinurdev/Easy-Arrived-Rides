
import './App.css';
import React from "react";
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

function App() {
  return (
    <Router>
      <div>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/book/:id">
            <Book></Book>
          </Route>
          <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
