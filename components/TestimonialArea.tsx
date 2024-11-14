import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialData {
    id: number;
    thumbnail: string;
    subtitle: string;
    name: string;
    designation: string;
    projectTitle: string;
    projectDate: string;
    description: string;
}

const testimonialData: TestimonialData[] = [
    {
        id: 1,
        thumbnail: "/final-home--1st.png",
        subtitle: "Rainbow-Themes",
        name: "Nevine Acotanza",
        designation: "Chief Operating Officer",
        projectTitle: "Android App Development",
        projectDate: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
        description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
    // Add other testimonials similarly
];

const TestimonialSection: React.FC = () => {
    return (
        <div className="rn-testimonial-area section-padding" id="testimonial">
            <Container>
                <Row className="mb-4">
                    <Col lg={12}>
                        <div className="section-title text-center">
                            <span className="subtitle">What Clients Say</span>
                            <h2 className="title">Testimonial</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <Carousel
                            nextIcon={<ArrowRight className="carousel-control" />}
                            prevIcon={<ArrowLeft className="carousel-control" />}
                            indicators={true}
                            interval={null}
                        >
                            {testimonialData.map((testimonial) => (
                                <Carousel.Item key={testimonial.id}>
                                    <div className="testimonial-card">
                                        <div className="inner">
                                            <div className="card-info">
                                                <div className="card-thumbnail">
                                                    <img
                                                        src={testimonial.thumbnail}
                                                        alt="Testimonial"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="card-content">
                                                    <span className="subtitle mt-2">{testimonial.subtitle}</span>
                                                    <h3 className="name">{testimonial.name}</h3>
                                                    <span className="designation">{testimonial.designation}</span>
                                                </div>
                                            </div>
                                            <div className="card-description">
                                                <div className="title-area">
                                                    <div className="title-info">
                                                        <h3 className="project-title">{testimonial.projectTitle}</h3>
                                                        <span className="date">{testimonial.projectDate}</span>
                                                    </div>
                                                    <div className="rating">
                                                        {[...Array(5)].map((_, index) => (
                                                            <img
                                                                key={index}
                                                                src="/rating.png"
                                                                alt="rating"
                                                                className="rating-star"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="separator" />
                                                <p className="description">{testimonial.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>

        {/*    Add styles here*/}
        </div>
    );
};

export default TestimonialSection;


//  <style jsx>{`
//         .section-padding {
//           padding: 100px 0;
//         }
//         .subtitle {
//           color: #5956E9;
//           font-size: 14px;
//           font-weight: 500;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           display: block;
//           margin-bottom: 12px;
//         }
//         .title {
//           font-size: 36px;
//           font-weight: 700;
//           line-height: 1.2;
//           margin-bottom: 0;
//         }
//         .testimonial-card {
//           background: #ffffff;
//           padding: 30px;
//           border-radius: 10px;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
//           margin: 20px 0;
//         }
//         .card-thumbnail img {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//         }
//         .card-info {
//           display: flex;
//           align-items: center;
//           margin-bottom: 20px;
//         }
//         .card-content {
//           margin-left: 20px;
//         }
//         .name {
//           font-size: 20px;
//           margin: 5px 0;
//         }
//         .designation {
//           color: #6c757d;
//           font-size: 14px;
//         }
//         .title-area {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 15px;
//         }
//         .rating-star {
//           width: 20px;
//           height: 20px;
//           margin-left: 5px;
//         }
//         .separator {
//           height: 1px;
//           background: #e9ecef;
//           margin: 15px 0;
//         }
//         .description {
//           color: #6c757d;
//           line-height: 1.6;
//         }
//         .carousel-control {
//           width: 40px;
//           height: 40px;
//           color: #5956E9;
//         }
//       `}</style>