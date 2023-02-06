import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import textutils from '../../Assets/Projects/textutils.png';
import admindash from '../../Assets/Projects/admindash.png'
import mern from '../../Assets/Projects/mern.jpg'
import eccomerce from '../../Assets/Projects/eccomerce.png'
import movie from '../../Assets/Projects/movie.jpg'
import weather from '../../Assets/Projects/weather.jpg'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="Full Stack Crud Operation"
              description="Crud operation perform as fulll stack by me using React js,Node JS, Express and Moongo Db"
              ghLink="https://github.com/Masifrehmani786/mern_crud"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eccomerce}
              isBlog={false}
              title="E-Commerce"
              description="E-commerce web app  by me in React js"
              ghLink="https://github.com/Masifrehmani786/Eccomerce-React"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admindash}
              isBlog={false}
              title="Admin Dashboard"
              description="Admin Dashboard app  by me in React js"
              ghLink="https://github.com/Masifrehmani786/admin-dashboard"
              
            />
          </Col>

         
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="Movie app by me in React js"
              ghLink="https://github.com/Masifrehmani786/MovieReact"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Textutils"
              description="Convert text , clear text , uppercase to lower and lower to upper by me in React js"
              ghLink="https://github.com/Masifrehmani786/taxtutils"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Real Time Weather"
              description="Weather App by me in React js"
              ghLink="https://github.com/Masifrehmani786/RealTimeWeather"
              
            />
          </Col>
          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
