import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from '../utils/constants'

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
      const pesanan = {
          total_bayar: totalBayar,
          menus: this.props.keranjangs
      }

      axios.post(API_URL+"pesanans", pesanan).then((res) => {
          this.props.history.push('/sukses')
      })
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
      {/* Web */}
      <div>
        <Row>
          <Col className="px-4">
            <br />
            <h5>
              Total Harga :{" "}
              <strong className="float-right ml-2">
              Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h5>
            <Button
              variant="dark"
              style={{width:"93%"}}
              block
              className="mb-2 mt-4 mr-2"
              size="lg"
              onClick={() => this.submitTotalBayar(totalBayar)}
            >
              <strong>Order Sekarang</strong>
            </Button>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}