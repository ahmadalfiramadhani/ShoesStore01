import { useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { API_URL } from "../utils/constants";

const Header = ({ isRefresh, setRefresh }) => {
  const [user, setUser] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const addTodo = () => {
    const newTodo = { user, alamat, keterangan, done: false };

    fetch(API_URL + "pesanans/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setUser("");
      setAlamat("");
      setKeterangan("");
      setRefresh(true);
      setTimeout(() => {
        // alert("Kalimat Berhasil Ditambahkan");
      }, 500);
    });
  };
  return (
    <div>
      <Card style={{borderRadius:"15px"}}>
        <Col style={{ marginTop: "10px", padding: "15px" }}>
          <h4>Detail Pemesan</h4>
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
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Nama Pemesan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tulis Nama Anda"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Alamat Pengiriman</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Alamat Tujuan..."
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <h4>Informasi Tambahan</h4>
          <hr size="5" style={{ color: "black", width: "5cm" }} />
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tambahkan Keterangan"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Row>
            <Col>
              <a href="/TabelOrder">
                <Button
                  style={{ width: "110px" }}
                  className="mt-3 btn"
                  size="md"
                  variant="dark"
                >
                  <strong>BACK</strong>
                </Button>
              </a>
              <a href="/OrderSelesai">
                <Button
                  style={{ float:"right", width: "110px" }}
                  className="mt-3 btn"
                  size="md"
                  type="submit"
                  onClick={addTodo}
                  variant="dark"
                >
                  <strong>NEXT</strong>
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Card>
    </div>
  );
};

export default Header;
