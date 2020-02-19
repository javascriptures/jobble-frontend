import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Login from './Components/Login';
import Jobs from './Components/Jobs';
import JobContainer from './Components/JobContainer';

import ResponsiveMenu from 'react-responsive-navbar';

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
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
