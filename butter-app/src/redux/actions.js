// redux/actions.js

// Action to toggle the modal
export const toggleModalAction = () => ({
    type: 'TOGGLE_MODAL',
  });
  
  // Action to perform user login
  export const loginAction = (email, password) => ({
    type: 'LOGIN',
    payload: { email, password },
  });
  
  // Action to create a user account
  export const createAccountAction = (firstName, lastName, email, password, dob) => ({
    type: 'CREATE_ACCOUNT',
    payload: { firstName, lastName, email, password, dob },
  });
  