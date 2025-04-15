import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vsf9jvv',
      'template_uohqehm',
      form.current,
      'yAv4dPO-6lNjj72BS'
    )
    .then(() => {
        toast.success("Message sent successfully! 🚀", {
          position: "top-center",
          autoClose: 3000,
        });
        form.current.reset();
    }, (error) => {
        toast.error("Failed to send message ❌", {
          position: "top-center",
          autoClose: 3000,
        });
    });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control type="text" name="user_name" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control type="email" name="user_email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" rows={4} name="message" placeholder="Your Message" required />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" variant="primary">Send Message</Button>
              </div>
            </Form>

            <div className="contact-links mt-4 text-center">
              <p className="mb-2 fw-semibold">Connect Through</p>
              
              <a href="https://www.linkedin.com/in/nadendla-giri-a08aa0244/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="contact-icon" />
              </a>
              
              <a href="https://github.com/NadendlaGiri" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contact-icon" />
              </a>

              <a href="mailto:nadendlagiribizz@gmail.com">
                <FaEnvelope className="contact-icon" />
              </a>
            </div>

          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </section>
  );
};

export default Contact;
