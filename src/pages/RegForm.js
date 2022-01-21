import { useState } from "react";
import CustomInput from "../components/Input/Input";
import React from "react";
import { Link } from "react-router-dom";

export default function RegUser() {
  const [userForm, setUserForm] = useState({
    name: "rahma",
    email: "Rahma@gmail.com",
    username: "rahmaramadan",
    password: "Developer",
    confirmpass: "Developer",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const [errors, setErrors] = useState({
    nameErr: null,
    emailErr: null,
    usernameErr: null,
    passwordErr: null,
    confirmpassErr: null,
  });
  const validateEmail = (userOption) => {
    let checker = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return checker.test(userOption);
  };
  const validatePassword = (userOption) => {
    let checker =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return checker.test(userOption);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };
  const hasWhiteSpace = (s) => {
    return s.indexOf(" ") >= 0;
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
      const isPassword = validatePassword(e.target.value);
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "This field is required"
            : !isPassword
            ? "Invalid! Password Should contain atleast 8 characters --> one UpperCase, LowerCase, digit and special character"
            : null,
      });
    } else if (e.target.name === "name") {
      setUserForm({
        ...userForm,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        nameErr: e.target.value.length === 0 ? "This field is required" : null,
      });
    } else if (e.target.name === "username") {
      const has_WhiteSpace = hasWhiteSpace(e.target.value);
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setErrors({
        ...errors,
        usernameErr:
          e.target.value.length === 0
            ? "This field is required"
            : has_WhiteSpace
            ? "Invalid Format! Username does not have spaces"
            : null,
      });
    } else if (e.target.name === "confirmpassword") {
      setUserForm({
        ...userForm,
        confirmpass: e.target.value,
      });
      setErrors({
        ...errors,
        confirmpassErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value !== userForm.password
            ? "Does not match password!"
            : null,
      });
    }
  };

  const submitUserDataForm = (e) => {
    e.preventDefault();
    if (!errors.emailErr && !errors.passwordErr) {
      // SEND API REQUEST
      console.log(userForm);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-warning">Resignation Form</h1>
      <form onSubmit={(e) => submitUserDataForm(e)}>
        <div className="mb-3">
          <CustomInput
            id={"nameID"}
            label={"Name"}
            errors={errors.nameErr}
            value={userForm.name}
            type="text"
            handleChange={(e) => changeData(e)}
            name={"name"}
          />
        </div>

        <div className="mb-3">
          <CustomInput
            id={"emailID"}
            label={"Email"}
            errors={errors.emailErr}
            value={userForm.email}
            type="text"
            handleChange={(e) => changeData(e)}
            name={"email"}
          />
        </div>
        <div className="mb-3">
          <CustomInput
            id={"usernameID"}
            label={" User Name"}
            errors={errors.usernameErr}
            value={userForm.username}
            type="text"
            handleChange={(e) => changeData(e)}
            name={"username"}
          />
        </div>

        <div className="mb-3">
          <CustomInput
            id={"passwordID"}
            label={"Password"}
            errors={errors.passwordErr}
            type={passwordShown ? "text" : "password"}
            value={userForm.password}
            handleChange={(e) => changeData(e)}
            name={"password"}
          />
          <button
            onClick={() => togglePassword()}
            id="1"
            className="btn btn-default text-success"
          >
            {passwordShown ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <div className="mb-3">
          <CustomInput
            id={"conpasswordID"}
            label={"Confirm Password"}
            errors={errors.confirmpassErr}
            value={userForm.confirmpass}
            type={passwordShown2 ? "text" : "password"}
            handleChange={(e) => changeData(e)}
            name={"confirmpassword"}
          />
          <button
            onClick={() => togglePassword2()}
            id="2"
            className="btn btn-default text-success"
          >
            {passwordShown2 ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <Link to="/">
          <button
            type="submit"
            disabled={
              errors.passwordErr ||
              errors.emailErr ||
              errors.nameErr ||
              errors.usernameErr ||
              errors.confirmpassErr
            }
            className="btn btn-light"
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
}
