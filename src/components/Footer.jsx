import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
  
  return (
    <>
      <footer className="bg-dark text-light py-2">
        <hr />
        <Container>
          <Row className="justify-content-center mb-2 mt-1">
            <Col xs="auto" className='my-3'>
              <a href="https://wa.me/6281280164209" className="text-light mx-3" >
                <FaWhatsapp size={20} className='hover-zoom'/>
              </a>
              <a href="mailto:fujisaskia46@gmail.com" className="text-light mx-3" >
                <FaEnvelope size={18} className='hover-zoom'/>
              </a>           
              <a href="https://www.instagram.com/__ffjsskiaa/" className="text-light mx-3">
                <FaInstagram size={20} className='hover-zoom'/>
              </a>
              <a href="https://github.com/fujisaskia" className="text-light mx-3">
                <FaGithub size={20} className='hover-zoom'/>
              </a>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col xs="auto">
              <p className="mb-1">Copyright © 2024 - Portfolio Fuji Saskia</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>

  );
};

export default Footer;
