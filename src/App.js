import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import Footer from "./components/Footer";
import { Home, Sukses, Keranjang1, TabelOrder, OrderSelesai } from "./pages";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} exact />
            <Route path="/Konfirmasi" component={Keranjang1} exact />
            <Route path="/TabelOrder" component={TabelOrder} exact />
            <Route path="/OrderSelesai" component={OrderSelesai} exact />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
