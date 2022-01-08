import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import { Button, Container, Card } from "react-bootstrap";
// import FormSett from "./FormSett";
import Tab from "./Tab";
import Navbar from "./Navbar";
import swal from "sweetalert";

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
      swal({
        title: "Sukses DiRubah",
        text: "Succes Full ",
        icon: "success",
        button: false,
        timer: 1500,
      });
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
        <Container>
          <main className="mt-5 pt-3">
            <div className="row">
              <Card className="row">
                <div className="col-md-7 mt-3">
                  <h4>
                    <center>
                      <strong>Setting App</strong>
                      <hr />
                    </center>
                  </h4>
                  <form>
                    <div className="form-group mb-1">
                      <label htmlFor="text">Nama Toko </label>
                      <input
                        className="form-control"
                        placeholder="Nama Toko..."
                        type="text"
                        id="nama"
                        name="nama"
                        onChange={this.HendelOnchange}
                        value={this.state.DataUserNew.nama}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Deskripsi</label>
                      <input
                        className="form-control"
                        placeholder="Deskripsi..."
                        id="deskripsi"
                        name="deskripsi"
                        onChange={this.HendelOnchange}
                        value={this.state.DataUserNew.deskripsi}
                      />
                    </div>
                    <Button
                      variant="outline-dark"
                      type="submit"
                      style={{
                        padding: "5px",
                        borderRadius: "10px",
                        float: "right",
                      }}
                      onClick={this.HendelSimpan}
                    >
                      <strong>Simpan</strong>
                    </Button>
                    {this.state.dataUser.map((dataUser) => {
                      return (
                        <Tab
                          key={dataUser.id}
                          data={dataUser}
                          update={this.HendelUpdate} // Pemanggilan Hendel Update
                        />
                      );
                    })}
                  </form>
                </div>
              </Card>
            </div>
          </main>
        </Container>
      </div>
    );
  }
}
export default Crud;
