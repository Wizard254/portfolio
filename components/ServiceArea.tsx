import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiMenu, FiBookOpen, FiTv, FiTwitch, FiWifi, FiSlack, FiArrowRight } from 'react-icons/fi';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <Col lg={6} xl={4} md={6} sm={12} className="mt-5 mt-md-4 mt-sm-4">
    <div className="rn-service" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
      <div className="inner">
        <div className="icon">
          {icon}
        </div>
        <div className="content">
          <h4 className="title"><a href="#">{title}</a></h4>
          <p className="description">{description}</p>
          <a className="read-more-button" href="#"><FiArrowRight /></a>
        </div>
      </div>
      <a className="over-link" href="#"></a>
    </div>
  </Col>
);

const ServiceArea: React.FC = () => {
  const services = [
    {
      icon: <FiMenu />,
      title: "Business Stratagy",
      description: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      icon: <FiBookOpen />,
      title: "App Development",
      description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence."
    },
    {
      icon: <FiTv />,
      title: "App Development",
      description: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      icon: <FiTwitch />,
      title: "Mobile App",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority."
    },
    {
      icon: <FiWifi />,
      title: "CEO Marketing",
      description: "always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      icon: <FiSlack />,
      title: "Personal Portfolio April",
      description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence."
    }
  ];

  return (
    <div className="rn-service-area rn-section-gap section-separator" id="features">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-title text-left" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
              <span className="subtitle">Features</span>
              <h2 className="title">What I Do</h2>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceArea;