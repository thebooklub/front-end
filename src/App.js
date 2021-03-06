import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import BooksContainer from './Components/BooksContainer';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import BookClubsList from './Components/BookClubsList';
import BookClub from './Components/BookClub';
import Cursor from './Components/Cursor';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem('booklub')
  );

  // const [bookclub, setBookClub] = useState({});

  // // console.log("render", loggedIn);
  // const bookClubProps = (bc) => {
  //   setBookClub(bc);
  // };

  // const onMouseMove = (e) => {
  //   const cursor = document.querySelector(".cursor");
  //   cursor.style.left = `${e.pageX}px`;
  //   cursor.style.top = `${e.pageY}px`;
  // };

  return (
    <>
      {/* <Cursor onMouseMove={onMouseMove} /> */}
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <br></br>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          {loggedIn ? (
            <>
              <Route
                exact
                path="/home"
                render={() => (
                  <Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
                )}
              />
              <Route exact path="/books" component={BooksContainer} />
              <Route exact path="/booklubs" render={() => <BookClubsList />} />
              <Route
                exact
                path="/booklubs/:id"
                render={(props) => <BookClub {...props} />}
              />
              <Route exact path="/profile" component={Profile} />
            </>
          ) : (
            <>
              <Route
                exact
                path="/home"
                render={() => (
                  <Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
                )}
              />
              <Route
                exact
                path="/login"
                render={() => <Login setLoggedIn={setLoggedIn} />}
              />
              <Route
                exact
                path="/signup"
                render={() => <Signup setLoggedIn={setLoggedIn} />}
              />
            </>
          )}
        </Switch>
      </div>
    </>
  );
}

export default App;
