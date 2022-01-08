import React, { Component } from "react";
import { Button } from "react-bootstrap";

class table extends Component {
  render() {
    const prmData = this.props.data;
    return (
      <div>
        {/* <Button
          style={{ width: "110px", marginLeft:"775px", borderRadius:"10px" }}
          className="mt-3 btn"
          size="md"
          onClick={() => this.props.update(prmData)}
          variant="dark"
        >
          Edit
        </Button> */}
        <Button
          variant="outline-dark"
          style={{
            padding: "5px",
            borderRadius: "10px",
            float: "right",
          }}
          onClick={() => this.props.update(prmData)}
        >
          <strong>Edit</strong>
        </Button>
      </div>
    );
  }
}

export default table;
