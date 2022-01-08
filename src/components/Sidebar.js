import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
// import FormSett from "./FormSett";
import Tab from "./Tab";
import Navbar from "./Navbar";

const apiURL = "http://localhost:3004/users/";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [], // Untuk tampung Get all data
      totalData: 0, // Untuk Hitung All Data
      isUpdate: false, // Untuk Fileter Fungsi
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
        deskripsi: "",
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
  ClearForm = () => {
    this.setState({
      isUpdate: false,
      DataUserNew: {
        id: 1,
        nama: "",
        deskripsi: "",
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
            <strong>SETTING APP</strong>
            <hr />
            {/* <FormSett /> */}
            <br />
            <div className="container">
              <div className="conten">
                <div className="form-inline">
                  <Card style={{ borderRadius: "15px" }}>
                    <Col style={{ marginTop: "10px", padding: "15px" }}>
                      <h4>Informasi Toko</h4>
                      <hr
                        size="5"
                        style={{
                          color: "black",
                          width: "4cm",
                          borderRadius: "50",
                        }}
                      />
                      <Row className="g-2">
                        <Col md>
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupEmail"
                          >
                            <Form.Label>Nama Toko</Form.Label>
                            <Form.Control
                              type="text"
                              id="nama"
                              placeholder="Nama.."
                              name="nama"
                              onChange={this.HendelOnchange}
                              value={this.state.DataUserNew.nama}
                            />
                          </Form.Group>
                          <br />
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupEmail"
                          >
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                              type="text"
                              id="Deskripsi"
                              placeholder="Deskripsi.."
                              name="Deskripsi"
                              onChange={this.HendelOnchange}
                              value={this.state.DataUserNew.deskripsi}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {this.state.dataUser.map((dataUser) => {
                            return (
                              <Tab
                                key={dataUser.id}
                                data={dataUser}
                                update={this.HendelUpdate} // Pemanggilan Hendel Update
                              />
                            );
                          })}
                        </Col>
                        <Col>
                          <Button
                            style={{
                              float: "right",
                              width: "110px",
                              borderRadius: "10px",
                            }}
                            className="mt-3 btn"
                            size="md"
                            onClick={this.HendelSimpan}
                            variant="dark"
                          >
                            <strong>SIMPAN</strong>
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Card>
                </div>
              </div>
            </div>
            <br />
          </div>
        </main>
      </div>
    );
  }
}
export default Crud;
