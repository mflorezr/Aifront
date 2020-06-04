import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { Link, Redirect } from "react-router-dom";

export class FooterPage extends React.Component {
  render() {
    return (
      <Footer
        color="stylish-color-dark"
        className="page-footer font-small pt-4 mt-4"
      >
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <Container className="text-left">
          <Row>
            <Col md="6">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Contactenos
              </h5>
              <p>
                Telefono: 01 8000 930 932
                <br />
                Celular: +57 312 546 3492
                <br />
                Direccion: Carrera 120 Calle 40 No. 115
                <br />
                Correo electronico: AIValue_hr@gmail.com
                <br />
                Medellin
                <br />
                Antioquia, Colombia
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <Link to="/register">
                  <li>
                    <a href="#!">Registrese gratis</a>
                  </li>
                </Link>
                <Link to="/Login">
                  <li>
                    <a href="#!">Ingrese a su cuenta</a>
                  </li>
                </Link>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr />

        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-lg btn-fb mx-1">
                <i className="fa fa-facebook fa-lg"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-lg btn-tw mx-1">
                <i className="fa fa-twitter fa-lg"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-lg btn-gplus mx-1">
                <i className="fa fa-google-plus fa-lg"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-lg btn-li mx-1">
                <i className="fa fa-linkedin fa-lg"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
