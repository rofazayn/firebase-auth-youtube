import authTypes from './auth.types';

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
