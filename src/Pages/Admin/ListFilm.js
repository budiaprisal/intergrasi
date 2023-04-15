import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import jumbo from "../../assets/lacasa.png";
import strips from "../../assets/lacasa1.png";
import { FakeData } from "../../DataDummy/FakeData";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function ListFilm() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <div className="pt-4 text-white d-flex  align-items-center w-100 ">
          <div>
            <h2 className="pt-4 text-white ">Tv Series</h2>
          </div>
          <div className="pt-4 ms-4 bg-black">
            <select className="bg-dark text-white  border-2">
              <option disabled>Category</option>
              <option>TV Series</option>

              <option> Movie</option>
              <h2 className="pt-4 text-white  ">Tv Series</h2>
            </select>
          </div>
          <div className=" pt-4  w-75">
            <Button
              style={{ float: "right" }}
              variant="btn btn-danger text-white "
              onClick={() => navigate("/add-film")}
            >
              Add Film
            </Button>
          </div>
        </div>

        <Row>
          {FakeData.map((item, index) => (
            <Col key={index} className="my-2 col-12 col-md-2">
              <Card
                style={{ width: "200px", cursor: "pointer", border: "none" }}
                onClick={() => {
                  navigate(`/detail-film/${item.id}`);
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

export default ListFilm;
