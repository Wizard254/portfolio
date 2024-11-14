import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SliderArea: React.FC = () => {
  return (
    <div id="home" className="rn-slider-area">
      <div className="slide slider-style-1">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="order-2 order-lg-1 mt-5 mt-lg-4">
              <div className="content">
                <div className="inner">
                  <span className="subtitle">Welcome to my world</span>
                  <h1 className="title">
                    Hi, I'm <span>Jone Lee</span><br />
                    <span className="header-caption" id="page-top">
                      <span className="cd-headline clip is-full-width">
                        <span>a </span>
                        <span className="cd-words-wrapper">
                          <b className="is-hidden">Developer.</b>
                          <b className="is-visible">Professional Coder.</b>
                          <b className="is-hidden">Developer.</b>
                        </span>
                      </span>
                    </span>
                  </h1>
                  <p className="description">
                    I use animation as a third dimension by which to simplify
                    experiences and kuiding thro each and every interaction. I'm not adding
                    motion just to spruce things up, but doing it in ways that.
                  </p>
                </div>
                <Row>
                  <Col lg={6} xl={6} md={6} sm={6} xs={12}>
                    <div className="social-share-inner-left">
                      <span className="title">find with me</span>
                      <ul className="social-share d-flex list-unstyled">
                        <li className="facebook"><a href="#"><FaFacebookF /></a></li>
                        <li className="instagram"><a href="#"><FaInstagram /></a></li>
                        <li className="linkedin"><a href="#"><FaLinkedinIn /></a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6} xl={6} md={6} sm={6} xs={12} className="mt-4 mt-sm-0">
                    <div className="skill-share-inner">
                      <span className="title">best skill on</span>
                      <ul className="skill-share d-flex list-unstyled">
                        <li><Image src="/icons-01.png" alt="Icons Images" /></li>
                        <li><Image src="/icons-02.png" alt="Icons Images" /></li>
                        <li><Image src="/icons-03.png" alt="Icons Images" /></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={5} className="order-1 order-lg-2">
              <div className="thumbnail">
                <div className="inner">
                  <Image src="/banner-01.png" alt="Personal Portfolio Images" fluid />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SliderArea;