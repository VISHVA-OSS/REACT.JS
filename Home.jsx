import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Footer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button variant="outline-light">Sign Up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container fluid className="bg-primary text-white py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1>Welcome to Our Home Page</h1>
            <p className="lead">
              Discover amazing features and services tailored just for you. Get started today!
            </p>
            <Button variant="light" size="lg">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Content Section */}
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>
                  This is a brief description of the first feature. It highlights key benefits and functionality.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>
                  This is a brief description of the second feature. It emphasizes ease of use and innovation.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  This is a brief description of the third feature. It focuses on reliability and support.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; 2023 My Website. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <Nav>
                <Nav.Link href="#privacy" className="text-white">Privacy Policy</Nav.Link>
                <Nav.Link href="#terms" className="text-white">Terms of Service</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;