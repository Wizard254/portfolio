// ContactSection.tsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
    profileImage?: string;
    name?: string;
    position?: string;
    phone?: string;
    email?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
                                                           profileImage = '/contact1.png',
                                                           name = 'Nevine Acotanza',
                                                           position = 'Chief Operating Officer',
                                                           phone = '+01234567890',
                                                           email = 'admin@example.com'
                                                       }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg={5}>
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src={profileImage} alt="contact-img" />
                            </div>
                            <div className="title-area">
                                <h4 className="title">{name}</h4>
                                <span>{position}</span>
                            </div>
                            <div className="description">
                                <p>
                                    I am available for freelance work. Connect with me via and call in to my account.
                                </p>
                                <span className="phone">
                  Phone: <a href={`tel:${phone}`}>{phone}</a>
                </span>
                                <span className="mail">
                  Email: <a href={`mailto:${email}`}>{email}</a>
                </span>
                            </div>
                            <div className="social-area">
                                <div className="name">FIND WITH ME</div>
                                <div className="social-icone">
                                    <a href="#"><Facebook /></a>
                                    <a href="#"><Linkedin /></a>
                                    <a href="#"><Instagram /></a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} className="contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                                <Form className="rnt-contact-form rwt-dynamic-form row" onSubmit={handleSubmit}>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="contact-name">Your Name</Form.Label>
                                            <Form.Control size="lg" type="text" id="contact-name" name="contact-name" />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="contact-phone">Phone Number</Form.Label>
                                            <Form.Control type="text" id="contact-phone" name="contact-phone" />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="contact-email">Email</Form.Label>
                                            <Form.Control size="sm" type="email" id="contact-email" name="contact-email" />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="subject">Subject</Form.Label>
                                            <Form.Control size="sm" type="text" id="subject" name="subject" />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="contact-message">Your Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                id="contact-message"
                                                name="contact-message"
                                                rows={10}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12}>
                                        <Button type="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <ArrowRight className="ms-2" />
                                        </Button>
                                    </Col>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactSection;