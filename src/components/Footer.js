import React, { Component } from "react";
import Catatan from "./Catatan";
import Kon from "./KonKon";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const apiURL = "http://localhost:3004/users/";

class Footer extends Component {
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
      <MDBFooter
        style={{ backgroundColor: "black" }}
        className="font-small pt-4 mt-4"
      >
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="ms-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                靴ファンタジー
              </h6>
              {/* <p>
              Selamat Datang Di Toko Kami,Disini anda dapat
              memilih,melihat,membeli berbagai macam sepatu. Dengan harga yang
              cukup terjangkau sesuai kelebihan bahan sepatu.
            </p> */}
              {this.state.dataUser.map((dataUser) => {
                return (
                  <Catatan
                    key={dataUser.id}
                    data={dataUser}
                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                  />
                );
              })}
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="1" lg="1" xl="1" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.adidas.co.id/"
                >
                  Adidas
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vans.com/"
                >
                  Vans
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pieroindonesia.com/"
                >
                  Piero
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://us.puma.com/us/en/home"
                >
                  Puma
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://superga.id/"
                >
                  Superga
                </a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="4" xl="4" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              {this.state.dataUser.map((dataUser) => {
                return (
                  <Kon
                    key={dataUser.id}
                    data={dataUser}
                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                  />
                );
              })}
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Store Location
              </h6>
              <iframe
                title="our address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.986278759119!2d139.69981052469336!3d35.664857637362005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca3c0e90351%3A0xb2265ecf2a9177ec!2sOnitsuka%20Tiger%20Omotesando%20Store!5e0!3m2!1sid!2sid!4v1639709455983!5m2!1sid!2sid"
                width="150"
                height="185"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> 靴ファンタジー </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.facebook.com/OnitsukaTigerJapan"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://twitter.com/ot_japan"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://instagram.com/onitsukatigerjp/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="/"
                    >
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );
  }
}
export default Footer;
