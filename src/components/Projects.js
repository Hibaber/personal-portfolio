import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Captura de pantalla 2023-04-28 a las 21.00.02.png";
import projImg2 from "../assets/img/cafe2.png";
import projImg3 from "../assets/img/iron.png";
import projImg4 from "../assets/img/omnifood.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Game Land",
      description: "Video game application that fetches data from Rawg API, built with React, TypeScript & Chakra UI. It's still a work in progress that will be completed soon.",
      imgUrl: projImg1,
      url: 'https://game-lland-q2qb6ve38-hibaber.vercel.app/',
    },
    {
      title: "Flat White & Mocha",
      description: "Specialty coffee website using server-side rendering built with Handelbars, NodeJs, Express, MongoDb and Bootstrap ",
      imgUrl: projImg2,
      url: 'https://flat-white-and-mocha-production.up.railway.app/',
    },

    {
      title: "The Iron Rat Journey",
      description: "Video game build with Canvas Vanilla JavaScript & CSS",
      imgUrl: projImg3,
      url: 'https://hibaber.github.io/The-IronRat-Journey/',
    },
    {
      title: "Omnifood",
      description: "Landing page built with Vanilla JavaScript, Html & Css",
      imgUrl: projImg4,
      url: 'https://omnifoodyy.netlify.app/',
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Check out the projects that I have been working on</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
