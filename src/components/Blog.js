import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import './Blog.css';

const blogPosts = [
  {
    title: "Building My Portfolio from Scratch with React 🚀",
    date: "April 2025",
    summary: "I built my personal portfolio using React, Bootstrap, and EmailJS. Here's how I approached each section...",
    details: "I started by designing a clean UI using React-Bootstrap, then structured the site into reusable components. I integrated EmailJS for the contact form, and deployed the final version using Vercel. The journey involved lots of debugging and refining UI responsiveness."
  },
  {
    title: "Driver Drowsiness Detection: A Deep Dive into AI & Safety 🧠",
    date: "March 2025",
    summary: "This blog shares the development process, challenges, and results from my AI-based drowsiness detection project.",
    details: "The system uses CNN for eye state detection, and includes an SOS trigger if drowsiness persists. I trained the model using a custom dataset and achieved high accuracy. Future work includes lane detection and steering feedback."
  },
  {
    title: "Speed Estimation Using YOLO 🚗💨",
    date: "February 2025",
    summary: "In this post, I explain how I used the YOLO algorithm to detect vehicle speed and how it integrates into smart traffic systems.",
    details: "YOLO detects vehicles in real-time, and I calculate speed based on frame-to-frame movement and camera calibration. This project is part of a broader smart traffic system I'm exploring."
  }
];

const Blog = () => {
  const [openPost, setOpenPost] = useState(null);

  const toggleReadMore = (index) => {
    setOpenPost(openPost === index ? null : index);
  };

  return (
    <section id="blog" className="blog-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Blog</h2>
        <Row>
          {blogPosts.map((post, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="blog-card h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                  <Card.Text>{post.summary}</Card.Text>
                  <Collapse in={openPost === index}>
                    <div className="mt-2">
                      <Card.Text className="text-secondary">{post.details}</Card.Text>
                    </div>
                  </Collapse>
                  <Button
                    variant="primary"
                    onClick={() => toggleReadMore(index)}
                    aria-controls={`collapse-text-${index}`}
                    aria-expanded={openPost === index}
                    className="mt-2"
                  >
                    {openPost === index ? 'Show Less' : 'Read More'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
