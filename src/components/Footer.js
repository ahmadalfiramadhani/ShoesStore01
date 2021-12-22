import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "black" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="ms-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              靴ファンタジー
            </h6>
            <p>
              Selamat Datang Di Toko Kami,Disini anda dapat
              memilih,melihat,membeli berbagai macam sepatu. Dengan harga yang
              cukup terjangkau sesuai kelebihan bahan sepatu.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="1" lg="1" xl="1" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="https://www.nike.com/id/">Nike</a>
            </p>
            <p>
              <a href="https://www.adidas.co.id/">Adidas</a>
            </p>
            <p>
              <a href="https://us.puma.com/us/en/home">Puma</a>
            </p>
            <p>
              <a href="https://www.vans.com/">Vans</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="4" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" />4 Chome-24-14 Jingumae, Shibuya
              City, Tokyo 150-0001, Jepang
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> shoefantasy@gmail.com
            </p>
            <p>
              <i className="fa fa-phone-alt mr-3" />
              +81 3-3405-6671
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Store Location
            </h6>
            <iframe
              title="our address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.986278759119!2d139.69981052469336!3d35.664857637362005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca3c0e90351%3A0xb2265ecf2a9177ec!2sOnitsuka%20Tiger%20Omotesando%20Store!5e0!3m2!1sid!2sid!4v1639709455983!5m2!1sid!2sid"
              width="150"
              height="185"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> 靴ファンタジー </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.facebook.com/OnitsukaTigerJapan"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://twitter.com/ot_japan"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://instagram.com/onitsukatigerjp/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="/"
                  >
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;


