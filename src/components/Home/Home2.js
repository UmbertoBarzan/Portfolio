import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              ABOUT <span className="purple"> ME</span>
            </h1>
            <p className="home-about-body">
              I started working on programming and technology about a year ago,
              and since then I’ve been steadily learning and experimenting.
              <br /><br />
              My main focus so far has been on <b className="purple">computer
              vision and AI</b>. I prefer a practical approach: building small
              projects, testing ideas, and improving step by step.
              <br /><br />
              I mainly use <b className="purple">Python</b>. I’m still at the
              beginning of my journey, and I’m working hard to develop solid
              skills I can apply in real situations.
            </p>
            {/* #TODO: se vuoi aggiungere 3 bullet concreti (mini-progetti), inseriscili qui */}
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            {/* #TODO: sostituisci avatar.svg con una tua immagine */}
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to connect with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/UmbertoBarzan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/umberto-barzan-8911a9332/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
