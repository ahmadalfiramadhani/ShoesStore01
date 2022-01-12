import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import Navbar from "./Navbar";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import {
  faDotCircle,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const apiURL = "http://localhost:3004/keranjangs/";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [], // Untuk tampung Get all data
      totalData: 0, // Untuk Hitung All Data
      isUpdate: false, // Untuk Fileter Fungsi simpan / Update data
      Notif: {
        // Untuk Tampung respon Dari Server
        alertShow: false,
        actionType: "",
        responCode: 0,
      },
      DataUserNew: {
        // untuk Tampung data Update / New data
        id: 1,
        nama: "",
        harga: "",
        category: "",
        gambar: "",
      },
    };
  }
  componentDidMount() {
    this.GetdataUsers();
  }

  GetdataUsers() {
    fetch(apiURL)
      .then((res) => {
        if (res.status === 200) return res.json();
        else return <p>No data Found</p>;
      })
      .then((resdata) => {
        console.log(resdata);
        // console.log('Numrow', resdata.length)
        this.setState({
          dataUser: resdata,
          totalData: resdata.length,
        });
      });
  }
  ClearForm = () => {
    this.setState({
      isUpdate: false,
      DataUserNew: {
        id: 1,
        nama: "",
        harga: "",
        category: "",
        gambar: "",
      },
    });

    // Mengembalikan Nilai Awal Notif
    setInterval(() => {
      this.setState({
        Notif: {
          alertShow: false,
          actionType: "",
          responCode: 0,
        },
      });
    }, 4500);
  };
  SaveNewDataUSer = () => {
    const Newdata = this.state.DataUserNew;

    fetch(apiURL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Newdata),
    }).then((res) => {
      console.log(res);
      console.log("Status Create", res.status);

      // Untuk Tampung respon Dari Server
      this.setState({
        Notif: {
          alertShow: true,
          actionType: "created",
          responCode: res.status,
        },
      });

      this.GetdataUsers();
      this.ClearForm();
    });
  };
  UpdateDataUser = () => {
    const dataUpdate = this.state.DataUserNew;
    const id = dataUpdate.id;

    fetch(apiURL + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    }).then((res) => {
      console.log(res);
      console.log("Status Update", res.status);

      // Untuk Tampung respon Dari Server
      this.setState({
        Notif: {
          alertShow: true,
          actionType: "updated",
          responCode: res.status,
        },
      });

      this.GetdataUsers();
      this.ClearForm();
    });
  };

  HendelOnchange = (event) => {
    // console.log('Form Change')
    const NumberingId = this.state.totalData + 1; // Untuk ID New Data
    let prmInputUser = { ...this.state.DataUserNew }; // Copy State
    if (!this.state.isUpdate) {
      //Cek Jika Update Data Idnya Tidak Di Ubah
      prmInputUser["id"] = NumberingId;
    }
    prmInputUser[event.target.name] = event.target.value;
    this.setState({
      DataUserNew: prmInputUser,
    });
  };
  HendelSimpan = () => {
    if (this.state.isUpdate) {
      this.UpdateDataUser();
    } else {
      this.SaveNewDataUSer();
    }
  };
  HendelUpdate = (data) => {
    console.log("Update id", data.id);
    console.log("Update arry", data);
    this.setState({
      DataUserNew: data,
      isUpdate: true,
    });
  };
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
                        <Form.Label
                          column
                          sm="2"
                          style={{ textAlign: "right" }}
                        >
                          Nama Barang
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            id="nama"
                            name="nama"
                            onChange={this.HendelOnchange}
                            value={this.state.DataUserNew.nama}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label
                          column
                          sm="2"
                          style={{ textAlign: "right" }}
                        >
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
                        <Form.Label
                          column
                          sm="2"
                          style={{ textAlign: "right" }}
                        >
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
                        <Form.Label
                          column
                          sm="2"
                          style={{ textAlign: "right" }}
                        >
                          Harga
                        </Form.Label>
                        <Col sm="5">
                          <Form.Control
                            type="number"
                            id="harga"
                            name="harga"
                            onChange={this.HendelOnchange}
                            value={this.state.DataUserNew.harga}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label
                          column
                          sm="2"
                          style={{ textAlign: "right" }}
                        >
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
                        >
                          <strong>
                            <FontAwesomeIcon icon={faTimes} /> Batal
                          </strong>
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
                          <strong>
                            <FontAwesomeIcon icon={faSave} /> Simpan
                          </strong>
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
export default Crud;
