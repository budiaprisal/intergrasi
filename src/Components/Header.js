import { Col, Row } from "react-bootstrap";

import jumbo from "../assets/Jumbotron.png";
import strips from "../assets/thewitcher.png";

const Header = () => {
  return (
    <Row>
      <Col className="position-relative">
        <Row>
          <div>
            <img
              src={jumbo}
              className=""
              style={{
                minHeight: "100vh",
                width: "220vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div
            className="position-absolute w-75"
            style={{ left: "120px", top: "200px" }}
          >
            <img src={strips} />
            <p
              className="text-white fs-4 w-50"
              style={{ textAlign: "justify" }}
            >
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beast
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
      </Col>
    </Row>
  );
};

export default Header;
