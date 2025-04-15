import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          {/* Profile Image on the left */}
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src="/profile.jpg"
              alt="About Me"
              className="img-fluid about-img"
            />
          </Col>

          {/* Bio text on the right */}
          <Col md={8}>
            <Card className="p-4 about-card">
              <Card.Text>
                I’m a highly motivated <strong>Master of Computer Applications</strong> student with a strong foundation in <strong>software development</strong>, <strong>frontend engineering</strong>, and <strong>project management</strong>.
                <br /><br />
                I specialize in building responsive, user-friendly web applications using <strong>Java</strong>, <strong>MySQL</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. With hands-on experience in developing real-time solutions and optimizing database performance, I thrive in dynamic environments that demand efficiency and innovation.
                <br /><br />
                My skill set also includes <strong>end-to-end testing</strong>, <strong>troubleshooting</strong>, and implementing improvements that boost system performance. I’m passionate about exploring new technologies and love collaborating with teams to turn creative ideas into impactful digital experiences.
                <br /><br />
                I'm driven by a deep curiosity, strong analytical thinking, and a commitment to continuous learning — all of which empower me to deliver high-quality results with confidence and clarity.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
