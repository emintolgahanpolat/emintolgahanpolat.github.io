import './App.css';
import { Navbar, Container, Row, Image, Col, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { useState } from 'react';
import Home from './page/home/Home';
import Unknown from './page/unknow/Unknow';
import Profile from './page/profile/Profile';
import SocialMedia from './page/component/SocialMedia';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<Router>
    <div className="App">

      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
        <Container >
          <Navbar.Brand href="#" onClick={handleShow}>@emintolgahanpolat</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
            >
            </Nav>
            <Nav>

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>@emintolgahanpolat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SocialMedia />
        </Modal.Body>

      </Modal>


      <Container style={{ marginTop: 100 }}>

        <Row>
          <Col sm="12" md="3"  >
            <Row style={{ textAlign: 'center' }}>
              <Container >
                <Image width={180} height={180} roundedCircle src='https://avatars.githubusercontent.com/u/20768158?s=400&u=b32c02c6e2ca1692901df04216d46a8eae908b42&v=4'></Image>
              </Container>
              <h2>Emin Tolgahan Polat</h2>
              <h5>Mobile Developer</h5>

              <SocialMedia />
            </Row>

          </Col>
          <Col sm="12" md="9" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Unknown />} />
            </Routes>
          </Col>
        </Row >



      </Container>
    </div>
  </Router >
  );
}

export default App;
