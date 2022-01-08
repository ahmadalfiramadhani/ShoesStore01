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
                      <hr size="5" style={{ color: "black", width: "3.1cm" }} />
                      <Card
                        className="overflow-auto keranjang"
                        style={{ border: "hidden" }}
                      >
                        <Card.Header
                          className="sticky-top"
                          style={{
                            backgroundColor: "white",
                          }}
                        >
                          <Row>
                            <Col className=" mt-2 total">
                              <h4>
                                <b>Menu</b>
                              </h4>
                            </Col>
                            <Col className=" mt-2 total">
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
                      </Card>
                      <Card>
                        <Card.Footer
                          className="sticky"
                          style={{
                            backgroundColor: "white",
                          }}
                        >
                          <Row>
                            <Col
                              style={{
                                paddingTop: "10px",
                              }}
                            >
                              <p>
                                <b>Total Harga: </b>
                              </p>
                            </Col>
                            <Col>
                              <p style={{ float: "right", paddingTop: "10px" }}>
                                <b>Rp. {numberWithCommas(totalBayar)}</b>
                              </p>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Col>
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
