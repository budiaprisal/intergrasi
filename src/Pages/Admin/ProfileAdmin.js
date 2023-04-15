import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import map from "../../assets/map.png";
import pesan from "../../assets/pesan.png";
import role from "../../assets/Role.png";
import shape from "../../assets/Shape.png";
import user from "../../assets/a.png";
import fullname from "../../assets/Vector.png";
import wa from "../../assets/wa.png";
function ProfileAdmin() {
  const navigate = useNavigate();

  const editProfile = () => {
    navigate("/edit-profile");
  };
  return (
    <div
      className="cover"
      style={{ height: "1000px", backgroundColor: "black" }}
    >
      <div className="profile d-flex profile__custom  ">
        <div className="bg-dark profile_1 px-3">
          <div>
            <h6 className="text-left text-white m-4">Personal Info</h6>
          </div>
          <div className="d-flex   px-4">
            <img src={fullname} width="20px" height="20px" />
            <div className="px-2 text-light">
              <p style={{ fontSize: "12px", margin: "0" }}>Radif Ganteng</p>
              <p style={{ fontSize: "12px" }}>Fullname</p>
            </div>
          </div>
          <div className="d-flex  px-4">
            <img src={pesan} width="20px" height="20px" />
            <div className="px-2 text-white ">
              <p style={{ fontSize: "10px", margin: "0" }}>Radif@gmail.com</p>
              <p style={{ fontSize: "12px" }}>Email</p>
            </div>
          </div>
          <div className="d-flex  px-4">
            <img src={shape} width="20px" height="20px" />
            <div className="px-2 text-white ">
              <p style={{ fontSize: "12px", margin: "0" }}>Activ</p>
              <p style={{ fontSize: "12px" }}>Status</p>
            </div>
          </div>{" "}
          <div className="d-flex  px-4">
            <img src={role} width="20px" height="20px" />
            <div className="px-2 text-white">
              <p style={{ fontSize: "12px", margin: "0" }}>Male</p>
              <p style={{ fontSize: "12px" }}>Gender</p>
            </div>
          </div>
          <div className="d-flex  px-4">
            <img src={wa} width="20px" height="20px" />
            <div className="px-2  text-white">
              <p style={{ fontSize: "12px", margin: "0" }}>08999038208</p>
              <p style={{ fontSize: "12px" }}>Phone</p>
            </div>
          </div>
          <div className="d-flex  px-4">
            <img src={map} width="20px" height="20px" />
            <div className="px-2 text-white">
              <p style={{ fontSize: "12px", margin: "0" }}>
                Perumahan Permata Bintaro Residence C-3
              </p>
              <p style={{ fontSize: "12px" }}>Address</p>
            </div>
          </div>
        </div>
        <div className="bg-dark d-flex flex-column profile_2 px-4 py-4">
          <img alt="user" src={user} height="400px" width="280px" />
          <Button className="btn btn-danger mt-2" onClick={editProfile}>
            Change Foto Profil
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileAdmin;
