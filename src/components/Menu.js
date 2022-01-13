import React from "react";
import "../assets/css/Sidebar.css";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="body main" style={{ backgroundColor: "gray" }}>
      <Navbar />

      {/* Content*/}
      <main className="mt-5 pt-3">
        <div className="container">
          <h4>
              <center>
                  <strong>DATA ORDER</strong>
                  <hr />
              </center>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
              </li>
            </ol>
          </nav>
          <div className="container" style={{ marginTop: "4rem" }}>
            <Card>
              <Card.Header
                style={{
                  backgroundColor: "black",
                  paddingTop: "20px",
                  color: "white",
                }}
              >
                <Card.Title>
                  <FontAwesomeIcon icon={faListAlt} size="md" />
                  {"  "}
                  Daftar Order
                </Card.Title>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "Lavender" }}>
                <Row>
                  <Col>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      style={{
                        width: "2cm",
                        padding: "5px 0px 5px 9px",
                        color: "red",
                      }}
                    >
                      <option selected>0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                      <option value="3">7</option>
                      <option value="3">8</option>
                      <option value="3">9</option>
                      <option value="3">10</option>
                    </select>
                  </Col>
                  <Col>
                    <span style={{ marginLeft: "290px", color: "red" }}>
                      Cari Data :{" "}
                      <input
                        type="text"
                        style={{
                          width: "3cm",
                          height: "0.9cm",
                          padding: "0px 10px 0px 10px",
                          color: "red"
                        }}
                      />
                    </span>
                  </Col>
                </Row>
                <br />
                <Table striped bordered hover className="text-center" style={{ color: "red" }}>
                  <thead className="ter" style={{ color: "red" }}>
                    <tr>
                      <th>{"  "}</th>
                      <th>No</th>
                      <th>Nama Pembeli</th>
                      <th>Total</th>
                      <th>Konfirm</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="cen" style={{ color: "red" }}>
                    <tr>
                      <td>
                        {" "}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ margin: "7px 7px" }}
                        />
                      </td>
                      <td>1</td>
                      <td>Layla</td>
                      <td>200.000</td>
                      <td>
                        <Button variant="success">KONFIRM</Button>
                      </td>
                      <td>
                        <Button variant="success">BAYAR</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nav;
