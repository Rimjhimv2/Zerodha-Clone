import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-gnpr.onrender.com/auth/login",
        { ...inputValue },
        { withCredentials: true } 
      );

      if (data.success) {
  handleSuccess(data.message || "Login successful");
  setTimeout(() => {
    window.location.href = "http://localhost:3001";
  }, 1000); 
}

      else {
        handleError(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      handleError(error.response?.data?.message || "Server error");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
   <div className="auth_body">
    <div className="auth_wrapper">
    <div className="form_container">
      <h2>Login Account</h2>
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
          Don’t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
    </div>
  );
};

export default Login;
