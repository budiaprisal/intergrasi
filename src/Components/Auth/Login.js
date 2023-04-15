import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { User } from "../../DataDummy/Users";

import FormAll from "../Atoms/FormAll";

const Login = ({
  show,
  setShow,
  setShowRegister,
  isLogin,
  setIsLogin,
  setUserRole,
}) => {
  const navigate = useNavigate();
  const handleClose = () => setShow(false);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  function successLogin(email, password) {
    const emailCheck = User.filter((field) => field.email === email);

    if (emailCheck.length === 0) {
      setStatusMessage("Email belum terdaftar");
      return {
        status: false,
        message: statusMessage,
      };
    }

    const result = User.filter((field) => field.password === password);

    if (result.length === 0) {
      setStatusMessage("Password Anda Salah");
      return {
        status: false,
        message: statusMessage,
      };
    }
    setStatusMessage("Login success");
    return {
      status: true,
      message: statusMessage,
      user: result[0],
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLogin);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ backgroundColor: "black" }}>
          {statusMessage != "" && (
            <p className={!isLogin ? "text-danger" : "text-success"}>
              {statusMessage}
            </p>
          )}
          <Form onSubmit={handleSubmit}>
            <div className="text-white m-2">
              <h2>Login</h2>
            </div>
            <FormAll
              label="Email"
              type="email"
              placeholder="Email"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
            <FormAll
              label="Password"
              type="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
          </Form>
          <Button
            className="btn-order btn-danger fw-bold px-5"
            onClick={() => {
              let hasLogin = successLogin(userLogin.email, userLogin.password);
              hasLogin.status && setIsLogin(true);
              hasLogin.status && setUserRole(hasLogin.user.role);
              hasLogin.status && setShow(false);
              hasLogin.status && setStatusMessage("");
              hasLogin.user.role === "admin" && navigate("/list-film");
            }}
          >
            Login
          </Button>
          <p className="mt-3 text-white">
            Don't have an account ? click
            <span
              className="fw-bold"
              onClick={() => {
                setShow(false);
                setShowRegister(true);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
