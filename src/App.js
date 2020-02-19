import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Jobs from './Components/Jobs';
import JobContainer from './Components/JobContainer';

import ResponsiveMenu from 'react-responsive-navbar';

const App = () => {
  return (
    <>
      <header>
        <ResponsiveMenu
          menuOpenButton={<div />}
          menuCloseButton={<div />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/review">Review Jobs!</Link>
              </li>
            </ul>
          }
        />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/review" component={Jobs} />
          <Route exact path="/jobs/:id" component={JobContainer} />
        </Switch>
      </main>
    </>
  );
};
export default App;
