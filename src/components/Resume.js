import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import './Resume.css';

const Resume = () => {
  const openResume = () => {
    window.open('/Nadendla-Giri-Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="resume-section py-5 text-center">
      <Container>
        <h2 className="section-title mb-4">Resume</h2>

        {/* Centered Image */}
        <Image
          src="/illustration.svg"
          alt="Resume Illustration"
          className="resume-image mb-4"
        />

        <p className="mb-3">Click below to view or download my resume.</p>
        <Button variant="primary" onClick={openResume}>View Resume</Button>
      </Container>
    </section>
  );
};

export default Resume;
