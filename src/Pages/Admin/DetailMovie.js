import React from "react";
import { Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import jumbo2 from "../../assets/Film.png";
import jumbo3 from "../../assets/lacasa.png";

import { useNavigate, useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import ListMovies from "../../DataDummy/ListMovies";

function DetailMovie() {
  const navigate = useNavigate();

  const { id } = useParams();
  const data = ListMovies.find((item) => item.id === parseInt(id));
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "800px",
      }}
    >
      <Row style={{ display: "blok", margin: "0 190px", paddingTop: "0" }}>
        <div>
          <iframe
            display="block"
            width="900"
            height="415px"
            src={data.trailer}
            title="YouTube video player"
          ></iframe>
        </div>
      </Row>

      <div className="d-flex pt-3 bg-black justify-content-between">
        <div className="card w-75  bg-black ">
          <div className="card-body m-5 p-4  d-flex ">
            <iframe src={data.image} width="310px" height="365px"></iframe>
            <div className="">
              <h2 className="px-4 text-white">{data.title}</h2>
              <div className="card-body  d-flex">
                <div className="px-2">
                  <p
                    style={{ text: "white" }}
                    className="px-2  btn btn-black  text-white"
                  >
                    {data.date}
                  </p>
                </div>
                <div>
                  <a href="#" class="btn btn-dark">
                    Tv Series
                  </a>
                </div>
              </div>
              <p className="   text-white " style={{ textAlign: "justify" }}>
                Money Heist is a crime drama on Netflix - originally called La
                Casa de Papel. Money Heist season 3 has just been released by
                the streaming service. The plot reads: "Eight thieves take
                hostages and lock themselves in the Royal Mint of Spain as a
                criminal mastermind manipulates the police to carry out his
                plan."
              </p>
            </div>
          </div>
        </div>

        <div className="card w-50  bg-black">
          <div className="card-body ms-0 d-flex flex-column ">
            <Carousel variant="danger">
              <Carousel.Item>
                <img className="d-block w-100" src={jumbo2} alt="First slide" />
                <Carousel.Caption>
                  <h5>In Play Now</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={jumbo3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>In Play Now</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div>
              <h5 className="text-white">Money Heist : Episode 1</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
