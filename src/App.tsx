import './App.css';
import { Navbar, Container, Row, Image, Col, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import { useState } from 'react';
import Home from './page/home/Home';
import Unknown from './page/unknow/Unknow';
import Blog from './page/blog/Blog';
import SocialMedia from './page/component/SocialMedia';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<Router basename="/">
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

              <Nav.Link as={Link} to='/'> Home</Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog</Nav.Link>

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
            <div style={{ textAlign: 'center' }} className='position-fixed'>
              <Container >
                <Image width={180} height={180} roundedCircle src='https://avatars.githubusercontent.com/u/20768158?s=400&u=b32c02c6e2ca1692901df04216d46a8eae908b42&v=4'></Image>
              </Container>
              <h2>Emin Tolgahan Polat</h2>
              <h5>Mobile Developer</h5>

              <SocialMedia />
            </div>

          </Col>
          <Col sm="12" md="9" >

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
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
