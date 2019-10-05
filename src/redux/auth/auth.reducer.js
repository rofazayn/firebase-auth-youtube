import authTypes from './auth.types';

// We have to find out a way to store the user object we retrieve from firebase in our store.
// To do that we have to dispatch an action after every auth change
// First we set a firebase auth observable to monitor the changes
// And on every change, we dispatch an action to set the user

const initialState = {
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case authTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };

    default:
      return state;
  }
};

export default authReducer;
