import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// import profileImage from '../assets/profileimage.jpg';
import myphoto from '../assets/myphoto.png'
import '../App.css';

const Home = () => {
  return (
  <>
    <Container fluid id='home' className="homepage d-flex justify-content-center" style={{ color: '#FFCDD2', paddingTop: '70px' }}>

      <Row className="w-100 align-items-center mx-5">
        <Col >
          <h4 className='' style={{ color: '#FFCDD2' }}> Hallo, saya</h4>
          <h1 className="fw-bold" style={{ color: '#FFFFFF', fontSize: '55px'}}>Fuji Saskia</h1>
          <p style={{ color: '#FFCDD2' }}>
          Haloo~ selamat datang di website yang menjadi salah satu dari karya saya. Di sini, saya akan berbagi perjalanan dan kreasi melalui desain, pengembangan, dan lebih banyak lagi!
          </p>
          <Button href='#about' className='hover-zoom px-4 mt-3 fw-medium' size="sm" style={{ backgroundColor: '#ff82ac', borderColor: '#ff82ac', borderRadius: '15px' }}>Learn More</Button>
        </Col>

        <Col xs={6} md={4} className="d-flex ms-5 justify-content-center my-5">
          <Image className='hover-zoom' src={myphoto} alt="Profile" style={{ width: '250px', height: '250px', boxShadow: '0 0 10px 2px #FFCDD2' }} roundedCircle />
        </Col>
      </Row>

    </Container>
  </>
  );
}

export default Home;
