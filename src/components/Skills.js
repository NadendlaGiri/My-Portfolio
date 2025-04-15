import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGit, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Skills</h2>
        <Row>
          {/* Skill 1: HTML */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaHtml5 className="skill-icon" />
                <h5 className="skill-title">HTML</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill 2: CSS */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaCss3Alt className="skill-icon" />
                <h5 className="skill-title">CSS</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill 3: JavaScript */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaJs className="skill-icon" />
                <h5 className="skill-title">JavaScript</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill 4: React */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaReact className="skill-icon" />
                <h5 className="skill-title">React</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill 5: Java */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaJava className="skill-icon" />
                <h5 className="skill-title">Java</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill 6: Git */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaGit className="skill-icon" />
                <h5 className="skill-title">Git</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill 7: Databases */}
          <Col md={4} className="mb-4">
            <Card className="skill-card text-center">
              <Card.Body>
                <FaDatabase className="skill-icon" />
                <h5 className="skill-title">MySQL</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
