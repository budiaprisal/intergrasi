import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import jumbo from "../assets/joker.png";
import strips from "../assets/joker1.png";

import { useNavigate } from "react-router-dom";
import FakeData from "../DataDummy/FakeData";
import { ListMovies } from "../DataDummy/ListMovies";

function LinkMovie() {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div>
        <img
          className=""
          src={jumbo}
          style={{
            width: "100%",
            backgroundColor: "black",
          }}
        />
      </div>
      <div
        className="position-absolute w-75"
        style={{ left: "100px", top: "150px" }}
      >
        <img src={strips} />
        <p className="text-white fs-6 w-50 " style={{ textAlign: "justify" }}>
          In Gotham City, mentally troubled comedian Arthur Fleck is disregarded
          and mistreated by society. He then embarks on a downward spiral of
          revolution and bloody crime. This path brings him face-to-face with
          his alter-ego: the Joker.
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
      <Container>
        <h2 className="pt-4 text-white ">Movies</h2>
        <Row>
          {ListMovies.map((item, index) => (
            <Col key={index} className="my-2 col-12 col-md-2">
              <Card
                style={{ width: "200px", cursor: "pointer", border: "none" }}
                onClick={() => {
                  navigate(`/detail-movie/${item.id}`);
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

export default LinkMovie;
