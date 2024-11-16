import React, { useState } from "react";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getLoginUser } from "../service/Service";

const LoginPage = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPasswort, setInputPassword] = useState();
  const navigate = useNavigate;
  // creat default value
  const defaultValue = {
    isEmail: true,
    isPassword: true,
  };
  const [valueCheck, setValueCheck] = useState(defaultValue);
  // check value
  const checkValue = () => {
    if (!inputEmail) {
      setValueCheck((prev) => ({
        ...prev,
        isEmail: false,
      }));
      toast.warn("Please enter your email");
      return false;
    }
    if (!inputPasswort) {
      setValueCheck((prev) => ({
        ...prev,
        isPassword: false,
      }));
      toast.warn("Please enter your email");
      return false;
    }
    return true;
  };
  // login button
  const login = async () => {
    let check = checkValue();
    if (check === true) {
      let userInformation = {
        email: inputEmail,
        password: inputPasswort,
      };
      let loginUser = await getLoginUser(userInformation);
      console.log(loginUser);
      if (loginUser.data.DC === 0) {
        let data = {
          name: loginUser.data.DT.DT.name,
          email: loginUser.data.DT.DT.email,
          role: loginUser.data.DT.DT.role,
        };
        sessionStorage.setItem("user", JSON.stringify(data));
        if (loginUser.data.DT.DT.role === "Admin") {
          window.location.replace("/adminPage");
        } else {
          window.location.replace("/");
        }
      } else {
        toast.error(loginUser.data.DM);
      }
    }
  };
  return (
    <div className="login">
      <div className="login-main-content">
        <div className="login-content">
          <div className="form">
            <label>Email:</label>
            <br />
            <input
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
              type="email"
            />
          </div>
          <div className="form">
            <label>Password:</label>
            <br />
            <input
              value={inputPasswort}
              onChange={(event) => setInputPassword(event.target.value)}
              type="password"
            />
          </div>
          <div className="button">
            <button className="login-button" onClick={() => login()}>
              Login
            </button>
            <Link to={"/register"}>
              <button className="register-button">Register</button>
            </Link>
          </div>
          <Link to={"/"}>
            <div className="button-back">
              <button>Back to homePage</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
