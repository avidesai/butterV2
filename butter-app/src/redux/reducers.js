// redux/reducers.js

const initialState = {
    showModal: true, // Set this to true to initially show the modal
    loggedIn: false, // Set this to true when the user successfully logs in
    // Add other necessary state variables
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          showModal: !state.showModal,
        };
      case 'LOGIN_SUCCESS':
        // Update the state when the user successfully logs in
        return {
          ...state,
          loggedIn: true,
          showModal: false, // Close the modal upon successful login
        };
      case 'LOGIN_FAILURE':
        // Handle login failure, you can set an error message or display an alert here
        return state;
      case 'CREATE_ACCOUNT_SUCCESS':
        // Handle successful account creation
        return {
          ...state,
          showModal: false, // Close the modal upon successful account creation
        };
      case 'CREATE_ACCOUNT_FAILURE':
        // Handle account creation failure, you can set an error message or display an alert here
        return state;
      default:
        return state;
    }
  };
  
  export default rootReducer;
  