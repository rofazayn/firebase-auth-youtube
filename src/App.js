import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home.component';
import Navbar from './components/Navbar/Navbar.component';
import SignIn from './components/SignIn/SignIn.component';
import SignUp from './components/SignUp/SignUp.component';
import { auth } from './configs/firebase.config';
import { setCurrentUser, clearCurrentUser } from './redux/auth/auth.actions';

function App({ currentUser, setCurrentUser, clearCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        clearCurrentUser();
      }
    });

    return () => unsubscribeFromAuth();
  }, [currentUser, setCurrentUser, clearCurrentUser]);

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
