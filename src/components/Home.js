import React, { Component } from "react";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import FooterPage from "./footerPage";

export class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public/../../img.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="col-md-10 m-auto">
                  <Card bg="dark" className="card-block special-card">
                    <Card.Body>
                      <h1 className="sl"> AI Value</h1>
                      <p className="sm">
                        Una herramienta que ayudará a tu compañia a ser exitosa.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public/../../img1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="col-md-14 m-auto">
                  <Card bg="dark" className="card-block special-card">
                    <Card.Body>
                      <h3 className="sl">¿Quienes Somos?</h3>
                      <p className="sm">
                        Somos una empresa que busca la sostenibilidad mediante
                        una perspectiva financiera, un énfasis en los datos y
                        una propuesta de valor enriquecida gracias a la
                        inteligencia artificial.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public/../../img3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="col-md-8 m-auto">
                  <Card bg="dark" className="card-block special-card">
                    <Card.Body>
                      <h3 className="sl">Nuestro proposito</h3>
                      <p className="sm">El desarrollo sostenible.</p>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="mt-5">
          <div className="mb-2 ">
            <h1>Bienvenido a AI Value</h1>
          </div>

          <div className="col-md-10 m-auto  ">
            <div className="row mt-5">
              <div className="col-md-4 col-ms-6">
                <Card bg="primary">
                  <Card.Img variant="top" src="public/../../icono1.png" />
                  <Card.Body>
                    <Card.Title>Analiza</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-ms-6">
                <Card bg="primary">
                  <Card.Img variant="top" src="public/../../icono2.png" />
                  <Card.Body>
                    <Card.Title>Ejecuta</Card.Title>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-4 col-ms-6">
                <Card bg="primary">
                  <Card.Img variant="top" src="public/../../icono3.png" />
                  <Card.Body>
                    <Card.Title>Predice</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default Home;
