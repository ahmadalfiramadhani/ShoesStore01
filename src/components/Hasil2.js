import React, { Component } from "react";
import { Card, Col, Table } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar1 from "./TotalBayar1";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Hasil extends Component {
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
    return (
      <Col
        md={3}
        className="mt-3"
        style={{ width: "1100px", marginLeft: "110px" }}
      >
        <h2 className="text-center">
          <strong>Pesanan Anda</strong>
        </h2>
        <hr />
        {keranjangs.length !== 0 && (
          <Card className="hasil">
            <Table
              className="text-center"
              striped
              bordered
              hover
              variant="dark"
            >
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Jumlah</th>
                  <th>Harga</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              {keranjangs.map((menuKeranjang) => (
                <tbody>
                  <tr
                    key={menuKeranjang.id}
                    onClick={() => this.handleShow(menuKeranjang)}
                  >
                    <td>{menuKeranjang.product.nama}</td>
                    <td>
                        {menuKeranjang.jumlah}
                    </td>
                    <td>Rp. {numberWithCommas(menuKeranjang.product.harga)}</td>
                    <td>Rp. {numberWithCommas(menuKeranjang.total_harga)}</td>
                  </tr>
                </tbody>
              ))}
            </Table>

            <ModalKeranjang
              handleClose={this.handleClose}
              {...this.state}
              tambah={this.tambah}
              kurang={this.kurang}
              changeHandler={this.changeHandler}
              handleSubmit={this.handleSubmit}
              hapusPesanan={this.hapusPesanan}
            />
          </Card>
        )}

        <TotalBayar1 keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}
