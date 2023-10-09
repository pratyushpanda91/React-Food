import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign.css";
import h from "./hide.png";
import s from "./show.png";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernamePosition, setUsernamePosition] = useState(9);
  const [usernameTextSize, setUsernameTextSize] = useState(16);
  const [emailPosition, setEmailPosition] = useState(9);
  const [emailTextSize, setEmailTextSize] = useState(16);
  const [passwordPosition, setPasswordPosition] = useState(9);
  const [passwordTextSize, setPasswordTextSize] = useState(16);
  const [showPassword, setShowPassword] = useState(false);
  const [unamecheck, setUnamecheck] = useState("");
  const [emailcheck, setEmailcheck] = useState("");
  const [pcheck, setPcheck] = useState("");
  const [uOpacity, setUOpacity] = useState(0.5);
  const [eOpacity, setEOpacity] = useState(0.5);
  const [pOpacity, setPOpacity] = useState(0.5);
  const [uback, setUback] = useState("none");
  const [eback, setEback] = useState("none");
  const [pback, setPback] = useState("none");
  const navigate = useNavigate();

  const pwdShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleInputChange1 = (e) => {
    const inputValue1 = e.target.value;
    setUsername(inputValue1);
    if (inputValue1 === "") {
      setUsernamePosition(9);
      setUsernameTextSize(16);
      setUOpacity(0.5);
      setUback("transparent");
    } else {
      setUsernamePosition(-7);
      setUsernameTextSize(12);
      setUnamecheck("");
      setUOpacity(1);
      setUback("white");
    }
  };

  const handleInputChange2 = (e) => {
    const inputValue2 = e.target.value;
    setEmail(inputValue2);
    if (inputValue2 === "") {
      setEmailPosition(9);
      setEmailTextSize(16);
      setEOpacity(0.5);
      setEback("transparent");
    } else {
      setEmailPosition(-7);
      setEmailTextSize(12);
      setEmailcheck("");
      setEOpacity(1);
      setEback("white");
    }
  };

  const handleInputChange3 = (e) => {
    const inputValue3 = e.target.value;
    setPassword(inputValue3);
    if (inputValue3 === "") {
      setPasswordPosition(9);
      setPasswordTextSize(16);
      setPOpacity(0.5);
      setPback("transparent");
    } else {
      setPasswordPosition(-7);
      setPasswordTextSize(12);
      setPcheck("");
      setPOpacity(1);
      setPback("white");
    }
  };

  const isValidEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  };

  const isValidUsername = (value) => {
    return value.length >= 5;
  };

  // const isValidPassword = (value) => {
  //   return value.length >= 6;
  // };
  const isValidPassword = (value) => {
    if (value.length < 8) {
      return false;
    }

    if (!/[A-Z]/.test(value)) {
      return false;
    }

    if (!/[a-z]/.test(value)) {
      return false;
    }

    if (!/\d/.test(value)) {
      return false;
    }

    if (!/[!@#$%^&*]/.test(value)) {
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (!isValidUsername(username)) {
      setUnamecheck("Invalid username! At least 5 characters.");
    } else if (!isValidEmail(email)) {
      setEmailcheck("Invalid email. Please enter a valid email address");
    } else if (!isValidPassword(password)) {
      setPcheck(
        "Atleast one uppercase,lowercase,digit and a special character."
      );
    } else {
      alert(
        `Logged in with Username: ${username}, Email: ${email}, and Password: ${password}`
      );
      navigate("/home");
    }
  };

  return (
    <div className="body1">
      <div className="login-container">
        <h2>User Login</h2>
        <form className="form1">
          {/* <img src="icon.png" id="icon" alt="icon" /> */}
          <p className="alert1">{unamecheck}</p>
          <p className="alert2">{emailcheck}</p>
          <p className="alert3">{pcheck}</p>
          <div className="username1">
            <label
              htmlFor="username"
              id="u1"
              style={{
                fontSize: `${usernameTextSize}px`,
                top: `${usernamePosition}px`,
                opacity: `${uOpacity}`,
                backgroundColor: `${uback}`,
              }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange1}
            />
          </div>
          <div className="email">
            <label
              htmlFor="email"
              id="e1"
              style={{
                fontSize: `${emailTextSize}px`,
                top: `${emailPosition}px`,
                opacity: `${eOpacity}`,
                backgroundColor: `${eback}`,
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email1"
              name="email"
              value={email}
              onChange={handleInputChange2}
            />
          </div>

          <div className="password-input">
            <label
              htmlFor="password"
              id="p1"
              style={{
                fontSize: `${passwordTextSize}px`,
                top: `${passwordPosition}px`,
                opacity: `${pOpacity}`,
                backgroundColor: `${pback}`,
              }}
            >
              Password
            </label>
            <div id="container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange3}
              />
              <button type="button" id="buttn" onClick={pwdShow}>
                {showPassword ? (
                  <img id="hide" src={h} />
                ) : (
                  <img id="show" src={s} />
                )}
              </button>
            </div>
          </div>

          <div className="login">
            <button type="button" id="loginbutton" onClick={handleLogin}>
              Login
            </button>
            <span className="footer">
              Don't have account? <b>Sign Up</b>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

function sign() {
  return (
    <div className="sign">
      <Login />
    </div>
  );
}

export default sign;
