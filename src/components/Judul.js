import React, { Component } from "react";
class table extends Component {
  render() {
    const prmData = this.props.data;
    return <div><h4><strong>{prmData.nama}</strong></h4></div>;
  }
}

export default table;