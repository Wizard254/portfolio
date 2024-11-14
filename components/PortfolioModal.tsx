// PortfolioModal.tsx
import React from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import { X, ThumbsUp, ChevronRight } from 'lucide-react';

interface PortfolioModalProps {
    show: boolean;
    onHide: () => void;
    project: {
        image: string;
        category: string;
        title: string;
        description: string;
        additionalDetails?: string;
    };
    onLikeClick?: () => void;
    onViewProject?: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
                                                           show,
                                                           onHide,
                                                           project,
                                                           onLikeClick,
                                                           onViewProject
                                                       }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
            aria-labelledby="portfolio-modal"
        >
            <Modal.Header>
                <Button
                    variant="link"
                    className="close"
                    onClick={onHide}
                    aria-label="Close"
                >
                    <X />
                </Button>
            </Modal.Header>

            <Modal.Body>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="portfolio-popup-thumbnail">
                            <div className="image">
                                <img
                                    className="w-100"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="text-content">
                            <h3>
                                <span>{project.category}</span> {project.title}
                            </h3>
                            <p className="mb--30">{project.description}</p>
                            {project.additionalDetails && (
                                <p>{project.additionalDetails}</p>
                            )}

                            <div className="button-group mt--20">
                                <Button
                                    className="rn-btn thumbs-icon"
                                    onClick={onLikeClick}
                                >
                                    <span>LIKE THIS</span>
                                    <ThumbsUp className="ms-2" />
                                </Button>

                                <Button
                                    className="rn-btn"
                                    onClick={onViewProject}
                                >
                                    <span>VIEW PROJECT</span>
                                    <ChevronRight className="ms-2" />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default PortfolioModal;