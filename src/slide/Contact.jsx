import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container fluid bg="dark" id='contact' className="pt-5 text-light bg-dark pb-5">
      <Card bg='dark' className='mt-4 mb-4 mx-2 text-light p-2' style={{ borderColor: '#ff82ac', borderRadius: '20px' }}>
        <Card.Body className='align-item-center justify-content-center mb-3'>
          <h2 className="mb-4 text-center fw-bold mb-2">Hubungi Saya</h2>
          <Row className='align-item-center justify-content-center'>
            <Col md={5}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d344.5393752379835!2d106.72857979920008!3d-6.591329816891105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721121119653!5m2!1sid!2sid"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </Col>
            <Col md={5} className='mt-4'>
              <p><strong>Alamat:</strong> Kp.Cikiruh rt.005/rw.005, Desa Neglasari, Kec.Dramaga</p>
              <p className='my-4'><strong>No.Tlp:</strong> +62 812-8016-4209</p>
              <p><strong>Email:</strong> fujisaskia46@gmail.com</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
