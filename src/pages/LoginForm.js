import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function LoginUser() {
  const [userForm, setUserForm] = useState({
    email: "Rahma@gmail.com",
    password: "Developer",
  });
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  const [errors, setErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });
  const validateEmail = (userOption) => {
    let checker = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return checker.test(userOption);
  };
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const changeData = (e) => {
    if (e.target.name === "email") {
      const isEmail = validateEmail(e.target.value);
      setUserForm({
        ...userForm,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
            : !isEmail
            ? "Invalid Email Format"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 8
            ? "Min. length is 8 characters"
            : null,
      });
    }
  };

  const submitUserDataForm = (e) => {
    e.preventDefault();
    if (!errors.emailErr && !errors.passwordErr) {
      console.log(userForm);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-warning">Login Form</h1>
      <form onSubmit={(e) => submitUserDataForm(e)}>
        <div className="mb-3">
          <label htmlFor="emailID" className="form-label text-light">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${errors.emailErr ? "border-danger" : ""}`}
            id="emailID"
            aria-describedby="email"
            value={userForm.email}
            onChange={(e) => changeData(e)}
            name="email"
          />
          <div id="email" className="form-text text-danger">
            {errors.emailErr}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordID" className="form-label text-light">
            Password
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            className={`form-control ${
              errors.passwordErr ? "border-danger" : ""
            }`}
            className="form-control"
            id="passwordID"
            value={userForm.password}
            onChange={(e) => changeData(e)}
            name="password"
          />
          <button
            onClick={togglePassword}
            className="btn btn-default text-success"
          >
            {passwordShown ? "Hide Password" : "Show Password"}
          </button>
          <div id="password" className="form-text text-danger">
            {errors.passwordErr}
          </div>
        </div>
        <Link to="/">
          <button
            type="submit"
            disabled={errors.passwordErr || errors.emailErr}
            className="btn btn-light"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
