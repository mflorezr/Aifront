import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";

class Logout extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="col-md-6 m-auto">
          <Card className="card-block special-card">
            <Card.Body>
              <h3 className="sl">¡Gracias! Esperamos que vuelva pronto</h3>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Logout;
