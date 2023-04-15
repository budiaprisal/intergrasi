import { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";

import FakeData from "../DataDummy/FakeData";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function ContentMovies() {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container style={{ backgroundColor: "black" }}>
        <h2 className="pt-4 text-white" style={{ backgroundColor: "black" }}>
          Tv Series
        </h2>
        <Row>
          {FakeData.map((item, index) => (
            <Col key={index} className="my-3 col-12 col-md-2">
              <Card
                style={{ width: "200px", cursor: "pointer", border: "none" }}
                onClick={() => {
                  !isLogin
                    ? setShowLogin(true)
                    : navigate(`/detail-film/${item.id}`);
                }}
              >
                <Card.Body
                  className="align-items-center"
                  style={{ backgroundColor: "black" }}
                >
                  <Card.Img src={item.image} />
                  <Card.Title
                    style={{ fontSize: "15px" }}
                    className="mt-2 text-light"
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text
                    style={{ fontSize: "12px" }}
                    className="mt-2 text-light"
                  >
                    {item.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Login
            show={showLogin}
            setShow={setShowLogin}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setShowRegister={setShowRegister}
          />
          <Register
            show={showRegister}
            setShow={setShowRegister}
            setShowRegister={setShowLogin}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ContentMovies;
