import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Home from './Components/Home';
//import ListView from './Components/ListView';
import Login from './Components/Login';
import Unsorted from './Components/Unsorted';
import Jobs from './Components/Jobs';

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/review">Review Jobs!</Link>
      </header>
      <Jobs />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/review" component={Unsorted} />
        </Switch>
      </main>
    </>
  );
};
export default App;
