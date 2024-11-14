import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FiHeart, FiArrowUpRight } from 'react-icons/fi';

interface PortfolioItemProps {
  image: string;
  category: string;
  likes: number;
  title: string;
  delay: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, category, likes, title, delay }) => (
  <Col lg={6} xl={4} md={6} xs={12} className="mt-5 mt-md-4 mt-sm-4">
    <div
      className="rn-portfolio"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalCenter"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-once="true"
    >
      <div className="inner">
        <div className="thumbnail">
          <a href="javascript:void(0)">
            <Image src={image} alt="Personal Portfolio Images" fluid />
          </a>
        </div>
        <div className="content">
          <div className="category-info">
            <div className="category-list">
              <a href="javascript:void(0)">{category}</a>
            </div>
            <div className="meta">
              <span>
                <a href="javascript:void(0)"><FiHeart /></a>
                {likes}
              </span>
            </div>
          </div>
          <h4 className="title">
            <a href="javascript:void(0)">
              {title} <FiArrowUpRight />
            </a>
          </h4>
        </div>
      </div>
    </div>
  </Col>
);

const PortfolioArea: React.FC = () => {
  const portfolioItems = [
    {
      image: "/portfolio-01.jpg",
      category: "Development",
      likes: 600,
      title: "The services provide for design",
      delay: 100
    },
    {
      image: "/portfolio-02.jpg",
      category: "Application",
      likes: 750,
      title: "Mobile app landing design & app maintain",
      delay: 300
    },
    {
      image: "/portfolio-03.jpg",
      category: "Photoshop",
      likes: 630,
      title: "Logo design creativity & Application",
      delay: 500
    },
    {
      image: "/portfolio-04.jpg",
      category: "Figma",
      likes: 360,
      title: "Mobile app landing design & Services",
      delay: 100
    },
    {
      image: "/portfolio-05.jpg",
      category: "Web Design",
      likes: 280,
      title: "Design for tecnology & services",
      delay: 300
    },
    {
      image: "/portfolio-06.jpg",
      category: "Web Design",
      likes: 690,
      title: "App for tecnology & services",
      delay: 500
    }
  ];

  return (
    <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-title text-center">
              <span className="subtitle">Visit my portfolio and keep your feedback</span>
              <h2 className="title">My Portfolio</h2>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioArea;
