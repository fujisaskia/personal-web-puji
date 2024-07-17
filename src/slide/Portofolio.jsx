import React, { useEffect } from 'react';
import figma from './../assets/figma.jpg';
import certificate from './../assets/certificate.jpg';
import website from './../assets/website.png';
import { Container, Row, Col, Card, Button, Img } from 'react-bootstrap';
import '../App.css';

const MyPortofolio = () => {

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('card-visible');
            } else {
              entry.target.classList.remove('card-visible');
            }
          });
        });
    
        cards.forEach((card) => {
          observer.observe(card);
        });
    
        return () => {
          cards.forEach((card) => {
            observer.unobserve(card);
          });
        };
      }, []);


    return (
        <>
        <Container fluid id='portofolio' className='justify-content-center text-light pb-5'>
            <Row className='pt-3'>
                <Col md={12} className="text-center pt-5">
                    <h1 className='fw-bold mb-5'> <span className="text-pink" style={{ color: '#ffadb5' }}>My</span> Portofolio</h1> 
                </Col>
            </Row>

            <Row className="d-flex w-100 align-items-center justify-content-center mb-5 mx-2 "> 
                <Col md={3} className="mb-4">
                    <Card bg="dark" className='p-2 card card-hidden-frontend hover-zoom-card text-light' style={{ width: '15rem', borderColor: '#ff82ac' }} >
                        <Card.Img className='rounded' variant="top" src={figma} />
                        <Card.Body bg="dark" data-bs-theme="dark">
                            <Card.Title className='fw-semibold'>Design</Card.Title>
                            <Card.Text>Project membuat design antarmuka pengguna yang dikerjakan saat di Sekolah menggunakan Figma</Card.Text>
                            <Button href="https://www.figma.com/design/bF6G2VUe3auq7lzQ9i29X2/Kelompok-fadhlurraman?node-id=0-1&t=4mIdz2ttQjFZCPNx-1" className='hover-zoom btn px-3' style={{ backgroundColor: '#fd76a3', borderColor: '#fd76a3', borderRadius: '20px' }}>check</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className="mb-4">
                    <Card bg="dark" className='p-2 card card-hidden-frontend hover-zoom-card text-light' style={{ width: '15rem', borderColor: '#ff82ac' }} >
                            <Card.Img className='rounded' variant="top" src={website} />
                            <Card.Body bg="dark" data-bs-theme="dark">
                                <Card.Title>Website</Card.Title>
                                <Card.Text> ini adalah salah satu proyek yang saya kerjakan bersama dengan tim saat uji level di sekolah.
                                </Card.Text>
                                <Button href="https://github.com/fujisaskia/Web_DaftarRohis_ujilevel10" className='hover-zoom btn px-3' style={{ backgroundColor: '#fd76a3', borderColor: '#fd76a3', borderRadius: '20px' }}>check</Button>
                            </Card.Body>    
                    </Card>               
                </Col>

                <Col md={3} className="mb-4">
                    <Card bg="dark" className='p-2 card card-hidden-frontend hover-zoom-card text-light' style={{ width: '15rem', borderColor: '#ff82ac' }} >
                                <Card.Img className='rounded' variant="top" src={certificate} />
                                <Card.Body bg="dark" data-bs-theme="dark">
                                    <Card.Title>Sertifikat</Card.Title>
                                    <Card.Text>Kumpulan sertifikat yang saya dapatkan selama menjadi siswi di jurusan PPLG
                                    </Card.Text>
                                    <Button href="https://drive.google.com/drive/folders/1hudhQxgkIrP9bRws66720p2Puix3Wkw5?usp=drive_link" className='hover-zoom btn px-3' style={{ backgroundColor: '#fd76a3', borderColor: '#fd76a3', borderRadius: '20px' }}>check</Button>
                                </Card.Body>    
                        </Card>
                </Col>
            </Row>


        </Container>
      </>

    );
}  

export default MyPortofolio;