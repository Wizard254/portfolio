import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

interface FooterProps {
    logoSrc?: string;
    copyrightYear?: number;
    companyName?: string;
    companyUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
                                           logoSrc = '/logo-vertical-dark.png',
                                           copyrightYear = new Date().getFullYear(),
                                           companyName = 'Rainbow-Themes',
                                           companyUrl = 'https://themeforest.net/user/rainbow-themes/portfolio'
                                       }) => {
    return (
        <div className="rn-footer-area rn-section-gap section-separator">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="footer-area text-center">
                            <div className="logo">
                                <a href="https://rainbowit.net/html/inbio/index.html">
                                    <Image src={logoSrc} alt="logo" />
                                </a>
                            </div>
                            <p className="description mt--30">
                                © {copyrightYear}. All rights reserved by{' '}
                                <a target="_blank" href={companyUrl} rel="noopener noreferrer">
                                    {companyName}
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;