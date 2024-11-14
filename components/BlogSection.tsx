import React from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FiClock, FiArrowUpRight } from 'react-icons/fi';

// Types
interface BlogPost {
    id: string;
    image: string;
    category: string;
    readTime: string;
    title: string;
    delay?: number;
}

interface SectionTitleProps {
    subtitle: string;
    title: string;
}

interface BlogCardProps extends BlogPost {
    onClick: () => void;
}

// Section Title Component
const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => (
    <div
        className="section-title text-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-once="true"
    >
        <span className="subtitle">{subtitle}</span>
        <h2 className="title">{title}</h2>
    </div>
);

// Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({
                                               image,
                                               category,
                                               readTime,
                                               title,
                                               delay = 100,
                                               onClick
                                           }) => (
    <Col
        lg={6}
        xl={4}
        md={6}
        sm={12}
        className="mt-4"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay={delay}
        data-aos-once="true"
    >
        <div className="rn-blog" onClick={onClick}>
            <div className="inner">
                <div className="thumbnail">
                    <a href="javascript:void(0)">
                        <img src={image} alt={title} className="w-100" />
                    </a>
                </div>
                <div className="content">
                    <div className="category-info d-flex justify-content-between">
                        <div className="category-list">
                            <a href="javascript:void(0)">{category}</a>
                        </div>
                        <div className="meta">
              <span>
                <FiClock className="me-1" />
                  {readTime}
              </span>
                        </div>
                    </div>
                    <h4 className="title">
                        <a href="javascript:void(0)">
                            {title}
                            <FiArrowUpRight className="ms-2" />
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    </Col>
);

// Blog Section Component
const BlogSection: React.FC = () => {
    const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

    const blogPosts: BlogPost[] = [
        {
            id: '1',
            image: '/blog-01.jpg',
            category: 'Canada',
            readTime: '2 min read',
            title: 'T-shirt design is the part of design',
            delay: 100
        },
        {
            id: '2',
            image: '/blog-02.jpg',
            category: 'Development',
            readTime: '2 hour read',
            title: 'The services provide for design',
            delay: 150
        },
        {
            id: '3',
            image: '/blog-03.jpg',
            category: 'Application',
            readTime: '5 min read',
            title: 'Mobile app landing design & app maintain',
            delay: 200
        }
    ];

    return (
        <div className="rn-blog-area rn-section-gap section-separator" id="blog">
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle="Visit my blog and keep your feedback"
                            title="My Blog"
                        />
                    </Col>
                </Row>
                <Row className="mt-4">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            {...post}
                            onClick={() => setSelectedPost(post)}
                        />
                    ))}
                </Row>
            </Container>

            {/* Blog Post Modal */}
            <Modal
                show={!!selectedPost}
                onHide={() => setSelectedPost(null)}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{selectedPost?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedPost && (
                        <div>
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-100 mb-3"
                            />
                            <div className="d-flex justify-content-between mb-3">
                                <span className="category">{selectedPost.category}</span>
                                <span className="read-time">
                  <FiClock className="me-1" />
                                    {selectedPost.readTime}
                </span>
                            </div>
                            {/* Add more modal content here */}
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BlogSection;