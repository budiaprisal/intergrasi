import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import jumbo from "../assets/lacasa.png";
import strips from "../assets/lacasa1.png";
import FakeData from "../DataDummy/FakeData";

function ContentTv() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "black" }}>
      <Row className="position-relative ">
        <div>
          <img
            src={jumbo}
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "dark",
            }}
          />
        </div>
        <div
          className="position-absolute w-75"
          style={{ left: "100px", top: "150px" }}
        >
          <img src={strips} />
          <p className="text-white fs-6 w-50" style={{ textAlign: "justify" }}>
            Money Heist is a crime drama on Netflix - originally called La Casa
            de Papel. Money Heist season 3 has just been released by the
            streaming service. The plot reads: "Eight thieves take hostages and
            lock themselves in the Royal Mint of Spain as a criminal mastermind
            manipulates the police to carry out his plan."
          </p>

          <div className="d-flex  w-25">
            <p className="fs-4 me-5 text-white">2019</p>
            <button className="btn btn-outline-light ">TV Series</button>
          </div>

          <button
            className="btn btn-danger w-25 mt-4 shadow-lg "
            style={{ height: "50px", fontSize: "25px" }}
          >
            WATCH NOW !
          </button>
        </div>
      </Row>
      <Container>
        <h2 className="pt-4 text-white ">Tv Series</h2>
        <Row>
          {FakeData.map((item, index) => (
            <Col key={index} className="my-2 col-12 col-md-2">
              <Card
                style={{ width: "200px", cursor: "pointer", border: "none" }}
                onClick={() => {
                  navigate(`/detail-tvshow/${item.id}`);
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
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "white" }}>
                    {item.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ContentTv;
