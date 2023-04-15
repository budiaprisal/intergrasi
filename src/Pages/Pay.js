import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import iconFile from "../assets/at.png";

function Pay() {
  return (
    <div
      className="cover"
      style={{ height: "1000px", backgroundColor: "black" }}
    >
      <div className="profile d-flex profile__custom  ">
        <div className=" d-flex flex-column profile_2  m-auto">
          <div>
            <h2 className="text-center text-white m-4 fw-bold">Premium</h2>
          </div>
          <div>
            <h6 className="text-center text-white">
              Bayar sekarang dan nikmati streaming film-film yang kekinian dari{" "}
              <span style={{ color: "red" }}>DUMBFLIX</span>
              <br></br>
              <span style={{ color: "red" }}>DUMBFLIX</span> : 0981312323
            </h6>
          </div>

          <FormControl
            placeholder="Input Your Account Number"
            type="text"
            className="border-form bg-dark text-white p-3"
          />
          <Form.Group
            className="mb-3 d-flex  mt-3"
            controlId="formBasicEmail"
            style={{ height: "15%" }}
          >
            <Form.Control type="file" placeholder="Attach Image" hidden />
            <Form.Label className="d-flex align-items-center border-form border-dark input-img border border-1 ">
              <span style={{ color: "red" }}>Atacch proof of transfer</span>
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
          <Button className="btn btn-danger mt-2">Kirim</Button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
