import { useContext, useState } from "react";
import { Button, Container, Dropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import admin from "../assets/a.png";
import foodIcon from "../assets/b.png";
import logo from "../assets/dumbflix.png";
import logoutIcon from "../assets/logout-icon.svg";
import userPay from "../assets/payy.png";
import userIcon from "../assets/userr.png";
import users from "../assets/users.svg";
import { LoginContext } from "../Contexts/LoginContext";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
function Navbars() {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);

  const [userRole, setUserRole] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Navbar className="bg-dark" expand="lg">
        <Container className="d-flex ">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "50px",
                  left: "550px",
                  top: "10px",
                }}
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Brand
            style={{
              display: "flex",
              color: "white",
              height: "60px",
              top: "120",
            }}
          >
            <div className="mt-2">
              <Link
                to="/"
                style={{
                  textDecorationLine: "none",
                  color: "white",
                  height: "60px",
                }}
              >
                <a style={{ paddingRight: "20px" }}> Home </a>
              </Link>
              <Link
                to="/tvshow"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                <a style={{ paddingRight: "20px" }}>Tv Shows</a>
              </Link>
              <Link
                to="/movie"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                <a>Movies</a>
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            {!isLogin ? (
              <div>
                <Button
                  variant="btn btn-light text-danger  mx-3 px-4  "
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </Button>
                <Button
                  variant="btn btn-danger text-white   px-4 "
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
              </div>
            ) : userRole === "user" ? (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={users} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item
                      className="text-white fw-bold"
                      onClick={() => navigate("/profile")}
                    >
                      <img className="me-3" src={userIcon} />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-white fw-bold "
                      onClick={() => navigate("/pay")}
                    >
                      <img
                        className="me-3"
                        style={{ width: "35px" }}
                        src={userPay}
                      />
                      Pay
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      className="text-white fw-bold"
                      onClick={() => {
                        setIsLogin(false);
                        navigate("/");
                      }}
                    >
                      <img className="me-3" src={logoutIcon} />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={admin} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item onClick={() => navigate("/profile-admin")}>
                      <img className="me-3" src={userIcon} />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/list-film")}>
                      <img className="me-3" src={foodIcon} />
                      List Film
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/home-admin")}>
                      <img className="me-3" src={foodIcon} />
                      Income Trans
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        setIsLogin(false);
                        navigate("/");
                      }}
                    >
                      <img className="me-3" src={logoutIcon} />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        show={showLogin}
        setShow={setShowLogin}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setShowRegister={setShowRegister}
        setUserRole={setUserRole}
      />
      <Register
        show={showRegister}
        setShow={setShowRegister}
        setShowLogin={setShowLogin}
      />
    </div>
  );
}

export default Navbars;
