import React, { useState } from "react";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getRegisterNewUser } from "../service/Service";

const RegisterPage = () => {
  // set name
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [inputHint, setInputHint] = useState();
  const [inputRepassword, setInputRepassword] = useState();
  const [inputRole, setInputRole] = useState("Customer");
  // end
  // default value
  const defaultValue = {
    isInputName: true,
    isInputEmail: true,
    isInputPassword: true,
    isInputHint: true,
    isInputRepassword: true,
  };
  //  creat check value
  const [checkValue, setCheckValue] = useState(defaultValue);

  // check all the value
  const checkAllValue = () => {
    if (!inputName) {
      setCheckValue((prev) => ({
        ...prev,
        isInputName: false,
      }));
      toast.warn("Please enter your name");
      return false;
    }
    if (inputName.length < 5 || inputName.length > 12) {
      setCheckValue((prev) => ({
        ...prev,
        isInputName: false,
      }));
      toast.error("Please enter name from 5 to 12 characters");
      return false;
    }
    if (!inputEmail) {
      setCheckValue((prev) => ({
        ...prev,
        isInputEmail: false,
      }));
      toast.warn("Please enter you email");
      return false;
    }

    if (!inputPassword) {
      setCheckValue((prev) => ({
        ...prev,
        isInputPassword: false,
      }));
      toast.error("Please input password");
      return false;
    }
    if (inputPassword.length < 5 || inputPassword.length > 12) {
      setCheckValue((prev) => ({
        ...prev,
        isInputPassword: false,
      }));
      toast.warn("Please enter the password from 5 to 12 characters");
      return false;
    }

    if (!inputRepassword) {
      setCheckValue((prev) => ({
        ...prev,
        isInputPassword: false,
      }));
      toast.error("Please enter your re-password");
      return false;
    }
    if (inputRepassword !== inputPassword) {
      setCheckValue((prev) => ({
        ...prev,
        isInputRepassword: false,
      }));
      toast.error("Your confirm password is not the same");
      return false;
    }
    if (!inputHint) {
      setCheckValue((prev) => ({
        ...prev,
        isInputHint: false,
      }));
      toast.error("Please enter your hint");
      return false;
    }
    return true;
  };

  // function submit button
  const registerSubmit = async () => {
    let check = checkAllValue();
    if (check === true) {
      let userInformation = {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        role: inputRole,
        hint: inputHint,
      };
      let registerUser = await getRegisterNewUser(userInformation);
      if (registerUser.data.DC === 0) {
        toast.success(registerUser.data.DM);
        setTimeout(() => {
          window.location.replace("/login");
        }, 1500);
      } else {
        toast.warn(registerUser.data.DM);
      }
    }
  };
  return (
    <div className="registerpage">
      <h1>Register</h1>
      <div className="register-form">
        <div className="register-form-content">
          <label>Name:</label>
          <br />
          <div className="input">
            {" "}
            <input
              onChange={(event) => setInputName(event.target.value)}
              value={inputName}
              type="text"
            />
          </div>
        </div>
        <div className="register-form-content">
          <label>Email:</label>
          <br />
          <div className="input">
            {" "}
            <input
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
              type="email"
            />
          </div>
        </div>
        <div className="register-form-content">
          <label>Password:</label>
          <br />
          <div className="input">
            {" "}
            <input
              onChange={(event) => setInputPassword(event.target.value)}
              value={inputPassword}
              type="password"
            />
          </div>
        </div>
        <div className="register-form-content">
          <label>Confirm Password</label>
          <br />
          <div className="input">
            {" "}
            <input
              value={inputRepassword}
              onChange={(event) => setInputRepassword(event.target.value)}
              type="password"
            />
          </div>
        </div>
        <div className="register-form-content">
          <label>Hint:</label>
          <br />
          <div className="input">
            {" "}
            <input
              value={inputHint}
              onChange={(event) => setInputHint(event.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="regiter-button">
        <button className="regiter-submit" onClick={() => registerSubmit()}>
          Submit
        </button>
        <Link to={"/login"}>
          <button className="regiter-login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
