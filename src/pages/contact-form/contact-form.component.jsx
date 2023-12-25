import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contact-form.style.css';
const Contact= () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT US</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* buttons */}
            <div className="m-2">
              <a href="mailto:sunitis0026@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="sunitis0026@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Us
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/sunitis0026/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Follow on Instagram">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default Contact;
