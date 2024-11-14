// types.ts
interface BaseModalProps {
    show: boolean;
    onHide: () => void;
}

// BlogModal.tsx
import React from 'react';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap';
import { X } from 'lucide-react';

interface BlogPost {
    image: string;
    date: string;
    title: string;
    content: {
        mainContent: string;
        sections: Array<{
            title: string;
            content: string;
        }>;
    };
}

interface BlogModalProps extends BaseModalProps {
    post: BlogPost;
    onCommentSubmit?: (comment: BlogComment) => void;
}

export interface BlogComment {
    name: string;
    email: string;
    website?: string;
    comment: string;
}

const BlogModal: React.FC<BlogModalProps> = ({ show, onHide, post, onCommentSubmit }) => {
    const [formData, setFormData] = React.useState<BlogComment>({
        name: '',
        email: '',
        website: '',
        comment: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCommentSubmit?.(formData);
        setFormData({ name: '', email: '', website: '', comment: '' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
            dialogClassName="modal-news"
            aria-labelledby="blog-modal"
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
                <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid modal-feat-img"
                />

                <div className="news-details">
                    <span className="date">{post.date}</span>
                    <h2 className="title">{post.title}</h2>
                    <p>{post.content.mainContent}</p>

                    {post.content.sections.map((section, index) => (
                        <React.Fragment key={index}>
                            <h4>{section.title}</h4>
                            <p>{section.content}</p>
                        </React.Fragment>
                    ))}
                </div>

                <div className="comment-inner">
                    <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="rnform-group">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="rnform-group">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="rnform-group">
                                    <Form.Control
                                        type="text"
                                        placeholder="Website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </Col>

                            <Col lg={6} md={12}>
                                <div className="rnform-group">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Comment"
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleInputChange}
                                        style={{ height: '168px' }}
                                        required
                                    />
                                </div>
                            </Col>

                            <Col lg={12}>
                                <Button type="submit" className="rn-btn">
                                    <span>SUBMIT NOW</span>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default BlogModal;