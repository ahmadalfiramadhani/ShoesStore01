import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Adidas")
    return <img src="https://cdn-icons-png.flaticon.com/512/933/933635.png" alt="Adidas" width="45px" />;
  if (nama === "Piero")
    return <img src="https://cdn-icons-png.flaticon.com/512/933/933635.png" alt="Piero" width="45px" />;
  if (nama === "Puma")
    return <img src="https://cdn-icons-png.flaticon.com/512/933/933635.png" alt="Puma" width="45px" />;
  if (nama === "Superga")
    return <img src="https://cdn-icons-png.flaticon.com/512/933/933635.png" alt="Puma" width="45px" />;
  if (nama === "Vans")
    return <img src="https://cdn-icons-png.flaticon.com/512/933/933635.png" alt="Vans" width="45px" />;

  return <FontAwesomeIcon icon={faShoePrints} className="mr-2" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih } = this.props;
    return (
      <Col md={2} className="mt-3">
        <h4>
          <strong>Pilih Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={
                  categoriYangDipilih === category.nama && "category-aktif"
                }
                style={{ cursor: "pointer" }}
              >
                <h5>
                  <Icon nama={category.nama} /> {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
