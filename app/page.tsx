"use client"

import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import SliderArea from "@/components/SliderArea";
import ServiceArea from "@/components/ServiceArea";
import PortfolioArea from "@/components/PortfolioArea";
import ResumeArea from "@/components/ResumeArea";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import PortfolioModal from "@/components/PortfolioModal";

// Example usage in a parent component
import { useState } from 'react';
import BlogModal, {BlogComment} from "@/components/BlogModal";
import Footer from "@/components/Footer";
import TestimonialArea from "@/components/TestimonialArea";

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    const projectData = {
        image: '/portfolio-04.jpg',
        category: 'Featured - Design',
        title: 'App Design Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.',
        additionalDetails: 'Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!'
    };

    const handleLikeClick = () => {
        // Implement like functionality
        console.log('Liked project');
    };

    const handleViewProject = () => {
        // Implement view project functionality
        console.log('Viewing project');
    };

    // - Start Blog modal
    const [showModal2, setShowModal2] = useState(false);

    const blogPost = {
        image: '/blog-big-01.jpg',
        date: '2 May, 2021',
        title: 'Digital Marketo to Their New Office.',
        content: {
            mainContent: 'Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
            sections: [
                {
                    title: 'Nobis eleifend option conguenes.',
                    content: 'Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id.'
                },
                {
                    title: 'Mauris tempor, orci id pellentesque.',
                    content: 'Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique.'
                }
            ]
        }
    };

    const handleCommentSubmit = (comment: BlogComment) => {
        console.log('New comment:', comment);
        // Handle comment submission
    };
    // - End Blog modal

    return (
        <>
            <Header
                brand="InBio"
                navItems={[
                    {label: 'Home', href: '#home'},
                    {label: 'Features', href: '#features'},
                    // Add more nav items here
                ]}
                buyNowUrl="https://themeforest.net/checkout/from_item/33188244?license=regular"
            />

            <MobileMenu
                brand="InBio"
                navItems={[
                    { label: 'Home', href: '#home' },
                    { label: 'Features', href: '#features' },
                    // Add more nav items here
                ]}
            />

            <main className={"main-page-wrapper"}>
                <SliderArea/>
                <ServiceArea/>
                <PortfolioArea/>
                <ResumeArea/>
                <TestimonialArea/>

                <BlogSection/>
                <ContactSection/>
                <PortfolioModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    project={projectData}
                    onLikeClick={handleLikeClick}
                    onViewProject={handleViewProject}
                />

                <BlogModal
                    show={showModal2}
                    onHide={() => setShowModal2(false)}
                    post={blogPost}
                    onCommentSubmit={handleCommentSubmit}
                />

            </main>

            <Footer
                logoSrc="/logo-vertical-dark.png"
                copyrightYear={2024}
                companyName="Rainbow-Themes"
                companyUrl="https://themeforest.net/user/rainbow-themes/portfolio"
            />
        </>
    )
}
