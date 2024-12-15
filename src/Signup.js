
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaGoogle, FaEye } from 'react-icons/fa';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSignup, setShowSignup] = useState(true); // State to control signup form visibility
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const closePage = () => {
    setShowSignup(false); // Hide the signup form when close button is clicked
  };

  return (
    <div>
      {showSignup && (  // Only render the signup form if showSignup is true
        <div className="signup-container">
          <div className="header text-center">
            <p>
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now <span role="img" aria-label="peace">✌️</span>
            </p>
            <div className="close" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={closePage}>
              ✖
            </div>
          </div>
          <div className="container d-flex justify-content-between align-items-center my-5">
            <div className="form-container w-50">
              <h2>Create Account</h2>
              <form>
                <div className="d-flex gap-2">
                  <input type="text" className="form-control" placeholder="First Name" />
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <input type="email" className="form-control my-2" placeholder="Email" />
                <div className="position-relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                  />
                  <FaEye
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <input type="password" className="form-control my-2" placeholder="Confirm password" />
                <button type="submit" className="btn btn-primary w-100">Create Account</button>
              </form>
              <div className="social-signup my-3">
                <a href="# " className="d-flex align-items-center justify-content-center text-decoration-none my-2">
                  <FaFacebook className="me-2" /> Sign Up with Facebook
                </a>
                <a href="# " className="d-flex align-items-center justify-content-center text-decoration-none my-2">
                  <FaGoogle className="me-2" /> Sign Up with Google
                </a>
              </div>
              <div className="terms text-center">
                By signing up, you agree to our <a href="# ">Terms & conditions</a>, <a href="# ">Privacy policy</a>
              </div>
            </div>
            <div className="image-container w-50">
              <img
                src="/images/signup.svg"
                alt="Illustration of people interacting with a large mobile phone, one person holding a heart icon and another person sitting with a heart icon above their head"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

