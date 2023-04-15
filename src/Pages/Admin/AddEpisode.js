import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import iconFile from "../../assets/at.png";
import FormAll from "../../Components/Atoms/FormAll";

const AddEpisode = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cover w-auto"
      style={{
        height: "700px",
        width: "1000px",
        backgroundColor: "black",
      }}
    >
      <Container>
        <h2 className="my-5  text-white">Add Episode</h2>
        <Form>
          <Row>
            <Col className="col-12 col-md-9 ">
              <FormAll
                className="bg-dark "
                label="Title "
                type="text"
                placeholder="Title"
              />
            </Col>
            <Col className="col-12 col-md-3">
              <Form.Group
                className="mb-3 d-flex "
                controlId="formBasicEmail"
                style={{ height: "90%" }}
              >
                <Form.Control type="file" placeholder="Attach Image" hidden />
                <Form.Label className="d-flex align-items-center border-form  input-img border border-1  bg-dark text-white ">
                  Attach Thumbhail
                </Form.Label>
                <img
                  src={iconFile}
                  style={{
                    marginLeft: "-50px",
                    paddingTop: "10px",
                    paddingBottom: "10px",

                    width: "30px",
                    height: "60px",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <FormControl
            placeholder="Year"
            type="text"
            className="border-form bg-dark text-white p-3"
          />
          <div className="d-flex justify-content-end">
            <Button
              className="btn btn-danger w-25 mt-5  text-white"
              type="submit"
              onClick={() => navigate("/home-admin")}
            >
              ADD
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddEpisode;
