import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };


  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-gnpr.onrender.com/auth/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      if (data.message) {
        handleSuccess(data.message);

        
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError("Signup failed, please try again.");
      }
    } catch (error) {
      console.error(error);
      handleError(error.response?.data?.message || "Server error");
    }


    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="auth_body">
      <div className="auth_wrapper">
        <div className="form_container">
<div style={{ display: "flex", justifyContent: "center" }}>
  <img
    src="media/images/logo.svg"
    alt="logo"
    style={{ width: "90px", marginBottom: "15px" }}
  />
</div>


          <h2>Signup Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit">Submit</button>

            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>

      
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;

