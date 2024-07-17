import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import timelineElements from "../timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";

function About() {
  let schoolIconStyles = { background: "#ffadb5" };


  return (

    <Container fluid id='about' className="aboutme text-light pt-5">

      <Row>
        <Col md={12} className="text-center pt-4">
          <h1 className="text-pink fw-bold mb-5">About <span className="text-pink" style={{ color: '#ffadb5'}}>Me</span></h1>
        </Col>
      </Row>

      <Row className="d-flex w-100 align-items-center justify-content-center"> 
        <Col md={5} className='mb-3 ms-4'>
          <div>
            <Col className='text-center mb-2'>
              <h5 className="text-pink" style={{ color: '#FFCDD2' }}>Hello There!</h5>

            </Col>
                <p>Saya Fuji Saskia, salah satu siswi jurusan Rekayasa Perangkat Lunak dan Gim di SMKN 1 CIOMAS. Saat ini saya tertarik dalam dunia pemograman dan senang dalam mempelajari hal yang baru. Motivasi saya selama ini adalah bagaimana saya bisa terus belajar dan mengembangkan sesuatu yang dapat bermanfaat bagi banyak orang, hal tersebut membuat saya terus bersemangat untuk memperdalam pengetahuan saya.</p>
                <p>Saat mengetahui dunia teknologi, saya bermimpi menjadi seseorang yang dapat memberi pengaruh positif di dalamnya. Saya berharap terus bisa mengembangkan keterampilan dan pengetahuan, serta menciptakan solusi inovatif yang bermanfaat. Dengan dedikasi, saya yakin dapat mewujudkan mimpi ini dan memberikan dampak positif dalam dunia teknologi.</p>
          </div>
        </Col>

        <Col md={5}>
          <div>

          <Col className='text-center mb-4'>
          <h5 className="text-pink" style={{ color: '#FFCDD2' }}>Pendidikan</h5>
          </Col>
              <VerticalTimeline style={{ borderColor: '#ff82ac' }}>
                {timelineElements.map((element) => {
                  return (
                    <VerticalTimelineElement
                      key={element.key} className='hover-zoom'
                      iconStyle={schoolIconStyles}
                      icon={<SchoolIcon />}
                    >

                      <p className="vertical-timeline-element-title bg-light text-dark">
                        {element.title}
                      </p>
                      <p className="vertical-timeline-element-date mx-4">
                        {element.date}
                      </p>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
          </div>
        </Col>
      </Row>

    </Container>
  );
}


  
export default About;
