import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const Header = ({ isRefresh, setRefresh }) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const addTodo = () => {
    const newTodo = { nama, alamat, keterangan, done: false };

    fetch("http://localhost:3004/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setNama("");
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
      <Col style={{ marginTop: "10px" }}>
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
                required
                placeholder="Tulis Nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Alamat Pengiriman</Form.Label>
              <Form.Control
                type="text"
                required
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              placeholder="Tambahkan Keterangan"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Row style={{ marginRight: "60px" }}>
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
          </Col>
          <Col>
            <a href="/OrderSelesai">
              <Button
                style={{ marginLeft: "79%", width: "110px" }}
                className="mt-3 btn"
                size="md"
                onClick={addTodo}
                type="submit"
                variant="dark"
              >
                <strong>NEXT</strong>
              </Button>
            </a>
          </Col>
        </Row>
        {/* <a href="/OrderSelesai">
        <Button variant="dark" onClick={addTodo} type="submit">
          NEXT
        </Button>
        </a> */}
      </Col>
    </div>
  );
};

export default Header;
