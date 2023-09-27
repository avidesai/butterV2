import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalAction, loginAction, createAccountAction } from '../../redux/actions'; // Import your Redux actions

import './LoginModal.css';

function LoginModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal); // Get the showModal state from Redux

  const [formType, setFormType] = useState("Login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password)); // Dispatch login action to Redux
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    dispatch(createAccountAction(firstName, lastName, email, password, dob)); // Dispatch create account action to Redux
  };

  return (
    <div>
      {showModal && (
        <div className="modal-wrapper">
          <div className="modal">
            <button onClick={() => dispatch(toggleModalAction())} className="wallet-modal-close-button">X</button>
            <h2>Log In / Create Account</h2>
            <div className="form-toggle">
              <button
                className={formType === "Login" ? "active" : ""}
                onClick={() => setFormType("Login")}
              >
                Log In
              </button>
              <button
                className={formType === "Create Account" ? "active" : ""}
                onClick={() => setFormType("Create Account")}
              >
                Create Account
              </button>
            </div>
            {formType === "Login" ? (
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <form onSubmit={handleCreateAccount}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
