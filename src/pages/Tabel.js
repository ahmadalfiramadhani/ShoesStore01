import { useEffect, useState } from "react";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const TodoItem = ({ setRefresh, isRefresh }) => {
  const [Form, setform] = useState([]);
  useEffect(() => {
    if (isRefresh) {
      fetch("http://localhost:3004/form")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false);
          setform(data);
        })
        .catch((err) => {
          setRefresh(false);
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [isRefresh, setRefresh]);
  return (
    <div className="card">
      <Card className="order shadow" style={{ border: "hidden" }}>
      {Form.map((todos) => (
        <Card.Body
          style={{
            backgroundColor: "rgba(158, 158, 158, 0.096)",
          }}
        >
          <Row>
            <Col>
              <p>
                <b>Nama</b>
              </p>
            </Col>
            <Col>
              <p style={{ float: "right" }}>{todos.nama}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Alamat</b>
              </p>
            </Col>
            <Col>
              <p style={{ float: "right" }}>{todos.alamat}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Keterangan</b>
              </p>
            </Col>
            <Col>
              <p style={{ float: "right" }}>{todos.keterangan}</p>
            </Col>
          </Row>
        </Card.Body>
        ))}
      </Card>
    </div>
  );
};

export default TodoItem;
