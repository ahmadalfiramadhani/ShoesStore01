import React, { Component } from "react";
class table extends Component {
  render() {
    const pmDataa = this.props.data;
    return (
      <div>
        <p>
          <i className="fa fa-home mr-3" /> {pmDataa.home}
        </p>
        <p>
          <i className="fa fa-envelope mr-3" /> {pmDataa.email}
        </p>
        <p>
          <i className="fa fa-phone-alt mr-3" /> {pmDataa.telfon}
        </p>
      </div>
    );
  }
}

export default table;
