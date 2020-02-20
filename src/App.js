import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import UserHome from './Components/UserHome';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Jobs from './Components/Jobs';
import JobContainer from './Components/JobContainer';

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
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/review" component={Jobs} />
          <Route exact path="/jobs/:id" component={JobContainer} />
        </Switch>
      </main>
    </>
  );
};
export default App;
