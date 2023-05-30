import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRNFiJNxu7lmnmBzHfeb2n6f5TAFjIVp0",
  authDomain: "butterv2-152f5.firebaseapp.com",
  projectId: "butterv2-152f5",
  storageBucket: "butterv2-152f5.appspot.com",
  messagingSenderId: "1054094227315",
  appId: "1:1054094227315:web:62f892fd28ac879902f706",
  measurementId: "G-MKEMEZLSKP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
