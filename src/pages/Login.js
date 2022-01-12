import React, { Component } from "react";
import "../assets/css/Aaa.css";
// import { Container } from "react-bootstrap";

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
      this.props.history.push("/Dashbor");
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
      <div class="container-fluid">
        <div class="row main-content bg-success text-center">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo">
            </span>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <br />
              <div class="row">
                <h2>Log In</h2>
              </div>
              <div class="row">
                <form
                  control=""
                  class="form-group"
                  onSubmit={this.handleSubmit}
                >
                  <div class="row">
                    <input
                      type="text"
                      name="email"
                      id="username"
                      class="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div class="row">
                    {/* <span class="fa fa-lock"></span>  */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form__input"
                      placeholder="Password"
                    />
                  </div>
                  <div class="row">
                    <input type="submit" value="Login" class="btnnn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//   render() {
//     return (
//       <Container class="ad">
//         <div id="rt">
//           <div className="A mt-5" style={{backgroundColor:"rgb(216, 216, 216))", borderRadius:"20px", width:"500px"}}>
//               <h3><strong>Login</strong></h3>
//             <form className="form" onSubmit={this.handleSubmit}>
//               <div className="input-group" style={{marginLeft:"51px"}}>
//                 <label htmlFor="text"><strong>Username</strong></label>
//                 <input type="text" name="email" />
//               </div>
//               <div className="input-group" style={{marginLeft:"51px"}}>
//                 <label htmlFor="password"><strong>Password</strong></label>
//                 <input type="password" name="password" />
//               </div>
//               <button className="button primary">Login</button>
//             </form>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }
