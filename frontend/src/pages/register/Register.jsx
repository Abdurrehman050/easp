import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const validateEmail = (email) => {
    // Perform email validation logic here
    // Return true if email is valid, false otherwise
    // You can use regex or any other validation method
    // For example:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Perform password validation logic here
    // Return true if password is valid, false otherwise
    // You can define your own password validation rules
    // For example, password should have at least 8 characters
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (!validateEmail(email)) {
      // Email validation failed
      alert("Invalid email");
      return;
    }

    if (!validatePassword(password)) {
      // Password validation failed
      alert("Invalid password");
      return;
    }

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="file">Profile Picture</label>
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="country">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Pakistan"
            onChange={handleChange}
          />
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="seller">Activate the seller account</label>
            <label className="switch">
              <input
                id="seller"
                name="seller"
                type="checkbox"
                onChange={handleSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+92 xxxxxxxxxx"
            onChange={handleChange}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            placeholder="A short description of yourself"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
