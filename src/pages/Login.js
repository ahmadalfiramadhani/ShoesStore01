import React, { Component } from "react";
import "../assets/css/App.css";
import { Container } from "react-bootstrap";

export default class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email tidak boleh kosong");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password tidak bileh kosong");
    } else if (
      e.target.email.value === "admin" &&
      e.target.password.value === "admin12345"
    ) {
      this.props.history.push("/Admin");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
        alert("Email Dan Password Tidak Di Temukan");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <Container class="ad">
        <div id="rt">
          <div className="A mt-5" style={{backgroundColor:"rgb(216, 216, 216))", borderRadius:"20px", width:"500px"}}>
              <h3><strong>Login</strong></h3>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group" style={{marginLeft:"51px"}}>
                <label htmlFor="text"><strong>Username</strong></label>
                <input type="text" name="email" />
              </div>
              <div className="input-group" style={{marginLeft:"51px"}}>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" name="password" />
              </div>
              <button className="button primary">Login</button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}
