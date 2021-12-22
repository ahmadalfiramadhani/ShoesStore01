// import React, { Component } from "react";
// import { Col, Row, Form, FloatingLabel } from "react-bootstrap";

// export default class DetailPemesan extends Component {
//   render() {
//     return (
//       <Col>
//         <h4>Detail Pemesan</h4>
//         <hr
//           size="5"
//           style={{
//             color: "red",
//             width: "4cm",
//             borderRadius: "50",
//           }}
//         />
//         <Row className="g-2">
//           <Col md>
//             <FloatingLabel controlId="floatingInputGrid" label="Nama Anda">
//               <Form.Control type="email" placeholder="Tulis Nama Anda" />
//             </FloatingLabel>
//           </Col>
//           <Col md>
//             <FloatingLabel controlId="floatingInputGrid" label="No. Meja">
//               <Form.Control type="email" placeholder="Pilih No. Meja" />
//             </FloatingLabel>
//           </Col>
//         </Row>
//       </Col>
//     );
//   }
// }

import React, { Component } from "react";
import Abc from "./Abc";
import { Col, Row, Card, Container } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class DetailPemesan extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
      totalHarga: 0,
    };
  }

  handleShow = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
      totalHarga: menuKeranjang.total_harga,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleClose();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + "keranjangs/" + this.state.keranjangDetail.id, data)
      .then((res) => {
        this.props.update();
        swal({
          title: "Update Pesanan!",
          text: "Sukses Update Pesanan " + data.product.nama,
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  hapusPesanan = (id) => {
    this.handleClose();

    axios
      .delete(API_URL + "keranjangs/" + id)
      .then((res) => {
        this.props.update();
        swal({
          title: "Hapus Pesanan!",
          text:
            "Sukses Hapus Pesanan " + this.state.keranjangDetail.product.nama,
          icon: "error",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const { keranjangs } = this.props;
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <Container style={{ marginTop: "140px" }}>
        <h2 className="text-center">
          <b>KONFIRMASI ORDERAN</b>
        </h2>
        <div className="cardi">
          <div className="containere">
            <Row className="app">
              <Col>
                <Abc />
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {keranjangs.length !== 0 && (
                <Col className="psn">
                  <div style={{ margin: "10px" }}>
                    <Col>
                      <h4>Order Anda</h4>
                      <hr size="5" style={{ color: "black", width: "3cm" }} />
                      <Card className="order" style={{ border: "hidden" }}>
                        <Card.Header
                          style={{
                            backgroundColor: "rgba(158, 158, 158, 0.096)",
                          }}
                        >
                          <Row>
                            <Col className=" mt-4 total">
                              <h4>
                                <b>Menu</b>
                              </h4>
                            </Col>
                            <Col className=" mt-4 total">
                              <h4 style={{ float: "right" }}>
                                <b>Total</b>
                              </h4>
                            </Col>
                          </Row>
                        </Card.Header>
                        {keranjangs.map((menuKeranjang) => (
                          <Card.Body
                            style={{
                              backgroundColor: "rgba(158, 158, 158, 0.096)",
                            }}
                            key={menuKeranjang.id}
                            onClick={() => this.handleShow(menuKeranjang)}
                          >
                            <Row>
                              <Col>
                                <p>
                                  <b>{menuKeranjang.jumlah}x</b>&nbsp;{" "}
                                  {menuKeranjang.product.nama}
                                </p>
                              </Col>
                              <Col>
                                <p style={{ float: "right" }}>
                                  Rp.
                                  {numberWithCommas(menuKeranjang.total_harga)}
                                </p>
                              </Col>
                            </Row>
                          </Card.Body>
                        ))}
                        <Card.Footer
                          style={{
                            backgroundColor: "rgba(158, 158, 158, 0.096)",
                          }}
                        >
                          <Row>
                            <Col>
                              <p>
                                <b>Total Harga: </b>
                              </p>
                            </Col>
                            <Col>
                              <p style={{ float: "right" }}>
                                <b>Rp. {numberWithCommas(totalBayar)}</b>
                              </p>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Col>
                    {/* <a href="/TabelOrder">
                    <Button
                    style={{marginLeft:"79%", width:"110px"}}
                      className="mt-3 btn"
                      size="md"
                      variant="dark"
                    >
                      <strong>BACK</strong>
                    </Button>
                    </a>
                    <a href="/OrderSelesai">
                    <Button
                    style={{marginLeft:"79%", width:"110px"}}
                      className="mt-3 btn"
                      size="md"
                      variant="dark"
                    >
                      <strong>NEXT</strong>
                    </Button>
                    </a> */}
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}
