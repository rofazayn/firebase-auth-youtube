import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home.component';
import Navbar from './components/Navbar/Navbar.component';
import SignIn from './components/SignIn/SignIn.component';
import SignUp from './components/SignUp/SignUp.component';

function App({ currentUser }) {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(App);
