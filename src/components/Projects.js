import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">My Experience</h2>
        <Row className="d-flex justify-content-center">
          {/* Project 1: NoDue-Form Web Application */}
          <Col md={6} className="mb-4 d-flex">
            <Card className="project-card flex-fill">
              <Card.Body>
                <Card.Title>NoDue-Form Web Application</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Frontend Developer & Website Tester</Card.Subtitle>
                <Card.Text>
                  Developed responsive user interfaces using HTML, CSS, JavaScript and integrated with PHP and MySQL for seamless data handling and storage.
                  <br />
                  Conducted end-to-end testing to ensure functionality, performance, and database reliability.
                  <br />
                  Successfully implemented the project in real-time for college purposes, enhancing form management efficiency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 2: Student Admission Portal */}
          <Col md={6} className="mb-4 d-flex">
            <Card className="project-card flex-fill">
              <Card.Body>
                <Card.Title>Student Admission Portal</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Technical Assistant</Card.Subtitle>
                <Card.Text>
                  Collaborated with the development team to implement updates and new features for the college website.
                  <br />
                  Performed quality testing and troubleshooting to ensure the website's functionality, usability, and seamless operation.
                  <br />
                  Recorded information surrounding system failure to assist future rebuilds and troubleshoot malfunctioning hardware and software deployments to support nonstop operations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
