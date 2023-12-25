import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/Menue.webp'
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import "./experience.style.css";


const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Menu</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 10 }}>
            <Card>
            <Image alt="menue" src={Profile} style={{
              width: <>95%</>,
            }} />
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    
      
    </div>
  );
}

export default Experience;
