import authTypes from './auth.types';

export const setCurrentUser = user => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user
  };
};

// We are also going to need an action creator for clearing the user

export const clearCurrentUser = () => {
  return {
    type: authTypes.CLEAR_CURRENT_USER,
    payload: null
    // We set it back to null
  };
};
