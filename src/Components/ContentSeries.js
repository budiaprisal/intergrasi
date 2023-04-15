import { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";

import { Movie } from "../DataDummy/Movie";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function ContentSeries() {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <h2 className="pt-4 text-white"> TV Series</h2>
        <Row>
          {Movie.map((item, index) => (
            <Col key={index} className="my-3 col-12 col-md-2">
              <Card
                style={{ width: "200px", cursor: "pointer", border: "none" }}
                onClick={() => {
                  !isLogin ? setShowLogin(true) : navigate("/detail");
                }}
              >
                <Card.Body
                  className="align-items-center"
                  style={{ backgroundColor: "black" }}
                >
                  <Card.Img src={item.image} />
                  <Card.Title
                    style={{ fontSize: "15px" }}
                    className="mt-2 text-white"
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "white" }}>
                    {item.distance}
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

export default ContentSeries;
