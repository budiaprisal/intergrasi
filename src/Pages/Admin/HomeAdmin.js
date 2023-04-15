import React from "react";
import { Container, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function HomeAdmin() {
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
        <h2 className="mt-5 text-white"> Income Transaction</h2>
        <Table
          className="border border-2 my-5"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr className="text-danger">
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Radif Ganteng</td>
              <td>Bca.jpg</td>
              <td>29 / Hari</td>
              <td className=" text-success ">Active</td>
              <td>
                <div className="text-success ">Approve</div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button"></Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item className="text-success" href="#/action-1">
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">
                      Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Haris Rahman</td>
              <td>Bni.jpg</td>
              <td>26 / Hari</td>
              <td className=" text-success ">Active</td>
              <td>
                <div className="text-success ">Approve</div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button"></Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item className="text-success" href="#/action-1">
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">
                      Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Amin Subgaiyo</td>
              <td>Permata.jpg</td>
              <td>0 / Hari</td>
              <td className=" text-danger ">Not Active</td>
              <td>
                <div className="text-danger ">Cancel</div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button"></Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item className="text-success" href="#/action-1">
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">
                      Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Haris Arisna</td>
              <td>Permata.jpg</td>
              <td>0 / Hari</td>
              <td className=" text-danger ">Not Active</td>
              <td>
                <div className=" text-warning ">Pending</div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button"></Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item className="text-success" href="#/action-1">
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">
                      Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Aziz oni on</td>
              <td>Bca.jpg</td>
              <td>0 / Hari</td>
              <td className=" text-danger ">Not Active</td>
              <td>
                <div className=" text-warning r">Pending</div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button"></Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item className="text-success" href="#/action-1">
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">
                      Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Sugeng no parts</td>
              <td>Bni.jpg</td>
              <td>0 / Hari</td>
              <td className=" text-danger ">Not Active</td>
              <td>
                <div className="text-warning ">Pending</div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button"></Dropdown.Toggle>
                  <Dropdown.Menu striped bordered hover variant="dark">
                    <Dropdown.Item className="text-success" href="#/action-1">
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">
                      Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default HomeAdmin;
