import React, {Component} from "react";
import "../assets/css/Sidebar.css";
import Navbar from "./Navbar";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import {
  faDotCircle,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TambahMenu extends Component {
  render() {
  return (
    <div className="body main">
      <Navbar />

      {/* Content*/}
      <main className="mt-5 pt-3">
        <div className="container">
          <h4>
            <center>
              <strong>Tambah Produk</strong>
              <hr />
            </center>
          </h4>
          <Card>
            <Card.Header
              style={{
                backgroundColor: "black",
                paddingTop: "15px",
                color: "white",
              }}
            >
              <Card.Title>
                <FontAwesomeIcon icon={faDotCircle} /> Form Tambah Menu
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2" style={{ textAlign: "right" }}>
                        Nama Barang
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2" style={{ textAlign: "right" }}>
                        Deskripsi
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          as="textarea"
                          style={{ height: "300px" }}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2" style={{ textAlign: "right" }}>
                        Kategori
                      </Form.Label>
                      <Col sm="10">
                        <select className="form-select">
                          <option disabled selected>
                            -Pilih Kategori-
                          </option>
                          <option>Adidas</option>
                          <option>Piero</option>
                          <option>Puma</option>
                          <option>Reebok</option>
                          <option>Superga</option>
                          <option>Vans</option>
                        </select>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2" style={{ textAlign: "right" }}>
                        Harga
                      </Form.Label>
                      <Col sm="5">
                        <Form.Control type="number" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2" style={{ textAlign: "right" }}>
                        Upload Foto
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="file" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Button
                          variant="danger"
                          type="submit"
                          style={{
                            width: "100px",
                            padding: "10px",
                            borderRadius: "10px",
                            float: "right",
                          }}
                          onClick={this.HendelSimpan}
                        >
                          <strong><FontAwesomeIcon icon={faTimes} /> Batal</strong>
                        </Button>
                        <Button
                          variant="primary"
                          type="submit"
                          style={{
                            width: "100px",
                            padding: "10px",
                            borderRadius: "10px",
                            float: "right",
                          }}
                          onClick={this.HendelSimpan}
                        >
                          <strong><FontAwesomeIcon icon={faSave} /> Simpan</strong>
                        </Button>
                    </Form.Group>
                    
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <br />
        </div>
      </main>
    </div>
  );
}
}
