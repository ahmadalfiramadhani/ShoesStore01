import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
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
    return (
      <>
      <div>
        <Row>
          <Col className="px-4">
            <Button
            href="/Konfirmasi"
              variant="dark"
              style={{width:"20%", marginLeft:"81%"}}
              block
              className="mb-2 mt-4 mr-2"
              size="lg" >
              <strong>NEXT</strong>
            </Button>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}