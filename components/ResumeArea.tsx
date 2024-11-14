import React from 'react';
import { Nav, NavItem, NavLink, Tab } from 'react-bootstrap';

interface ResumeExperience {
    title: string;
    company: string;
    duration: string;
    rating: number;
    description: string;
}

interface ResumeSection {
    subtitle: string;
    title: string;
    experience: ResumeExperience[];
}

const resumeSections: ResumeSection[] = [
    {
        subtitle: '2007 - 2010',
        title: 'Education Quality',
        experience: [
            {
                title: 'Personal Portfolio April Fools',
                company: 'University of DVI (1997 - 2001)',
                duration: '',
                rating: 4.3,
                description:
                    'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
            },
            // ... other experience items
        ],
    },
    // ... other sections
];

const ResumeTabContent: React.FC = () => {
    return (
        <Tab.Container id="left-tabs" defaultActiveKey="education">
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link eventKey="education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="professional">Professional Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="experience">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="interview">Interview</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                {resumeSections.map((section, index) => (
                    <Tab.Pane key={index} eventKey={index}>
                        <div className="personal-experience-inner mt--40">
                            {/* ... rest of the content */}
                        </div>
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    );
};

const Resume: React.FC = () => {
    return (
        <div className="rn-resume-area rn-section-gap section-separator" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">7+ Years of Experience</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <Nav variant="tabs" defaultActiveKey="education" id="myTabs" role="tablist">
                            <NavItem>
                                <NavLink eventKey="education" id="education-tab">
                                    Education
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="professional" id="professional-tab">
                                    Professional Skills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="experience" id="experience-tab">
                                    Experience
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey="interview" id="interview-tab">
                                    Interview
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <ResumeTabContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;