import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../configs/firebase.config';
import { connect } from 'react-redux';

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Firebase Auth</div>
      <div className="navbar__links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
          {currentUser && currentUser ? (
            <li>
              <button onClick={() => auth.signOut()}>Sign out</button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
