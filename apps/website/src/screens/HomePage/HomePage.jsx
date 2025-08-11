import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

// --- Import all assets here ---
import tutoringGirl from '../../assets/images/tutoring-girl.png';
import progressBoy from '../../assets/images/progress-boy.png';
import iconEducators from '../../assets/icons/icon-educators.svg';
import iconLessons from '../../assets/icons/icon-lessons.svg';
import iconFlexible from '../../assets/icons/icon-flexible.svg';
import iconPricing from '../../assets/icons/icon-pricing.svg';
import iconAssess from '../../assets/icons/icon-assess.svg';
import iconPlan from '../../assets/icons/icon-plan.svg';
import iconExperience from '../../assets/icons/icon-experience.svg';
import iconLearnGrow from '../../assets/icons/icon-learn-grow.svg';
import ctaFamily from '../../assets/images/cta-family.png';
import teacherOk from '../../assets/images/teacher-ok.png';
import iconMath from '../../assets/icons/icon-math.svg';
import iconScience from '../../assets/icons/icon-science.svg';
import iconEnglish from '../../assets/icons/icon-english.svg';

// --- Import all components here ---
import Hero from '../../components/ui/Hero';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import HowItWorksSection from '../../components/ui/HowItWorksSection';
import LearningStyles from '../../components/ui/LearningStyles';
import ContentBanner from '../../components/ui/ContentBanner';
import SubjectCard from '../../components/ui/SubjectCard';
import Testimonials from '../../components/ui/Testimonials';
import CTASection from '../../components/ui/CTASection';

const tutoringFeatures = [
    { text: 'CHOOSE YOUR ', bold: 'PREFERRED SLOT' },
    { text: 'PROGRESS REPORTS ALIGNED WITH THE ', bold: 'AUSTRALIAN CURRICULUM' },
    { text: 'FREE CONSULTATION ', bold: 'AND DEMO CLASS' },
    { text: 'AUD 23/HOUR - ', bold: 'NO CONTRACTS' },
];

const progressFeatures = [
    { text: 'WHAT YOUR CHILD HAS ', bold: 'LEARNED' },
    { text: 'STRENGTHS AND AREAS FOR ', bold: 'IMPROVEMENT' },
    { text: 'NEXT STEPS ', bold: 'RECOMMENDED BY THE TUTOR' },
];

const whyTrustCards = [
    { 
        icon: iconEducators, 
        title: 'Qualified Educators', 
        description: "Our tutors are handpicked, trained, and dedicated to your child's unique learning journey." 
    },
    { 
        icon: iconLessons, 
        title: 'Curriculum-Aligned Lessons', 
        description: "All sessions follow your child's curriculum and learning goals, wherever you are in Australia.",
    },
    { 
        icon: iconFlexible, 
        title: 'Flexible & Convenient', 
        description: 'Your child can learn comfortably from home, on a schedule that fits your family.' 
    },
    { 
        icon: iconPricing, 
        title: 'Clear, Affordable Pricing', 
        description: 'Simple monthly plans with no hidden fees—and your first class is free.' 
    },
];

const subjectsData = [
    {
        icon: iconMath,
        title: 'Mathematics',
        description: 'Build strong numeracy skills and master concepts aligned with the Australian curriculum.',
        link: '/subjects/mathematics'
    },
    {
        icon: iconScience,
        title: 'Science',
        description: 'Explore biology, chemistry, and physics with engaging lessons that spark curiosity',
        link: '/subjects/science'
    },
    {
        icon: iconEnglish,
        title: 'English',
        description: 'Improve reading, writing, and comprehension confidence in communication.',
        link: '/subjects/english'
    },
    {
        icon: iconMath,
        title: 'Hindi',
        description: 'Build strong language skills and master concepts aligned with the Australian curriculum.',
        link: '/subjects/hindi'
    },
];

const howItWorksSteps = [
    { 
        icon: iconAssess, 
        title: 'Assess', 
        description: "Upload your child's recent assessment scores—or take a free assessment with us to understand their current level." 
    },
    { 
        icon: iconPlan, 
        title: 'Plan', 
        description: "We create a customised learning plan tailored to your child's needs and curriculum." 
    },
    { 
        icon: iconExperience, 
        title: 'Experience', 
        description: 'Start with a free trial class to see how engaging and effective online learning can be.' 
    },
    { 
        icon: iconLearnGrow, 
        title: 'Learn & Grow', 
        description: 'Select a plan, set your schedule, and watch your child’s skills and confidence grow.' 
    },
];

const HomePage = () => {
  return (
    <main>
      <Hero />
        <FeatureSection
          imagePosition="left"
          image={tutoringGirl}
          headingText="Private Online Tutoring Across Australia"
          descriptionText="One-on-one and group lessons for all grades, subjects, and test preparation."
          features={tutoringFeatures}
          buttonText="Book Your Free Trial Class"
        />

        {/* 3. Render the new TrustSection component with props */}
        <TrustSection
          headingText="Why Parents Trust TutorExel"
          cardsData={whyTrustCards}
        />

        <section className="py-5">
        <Container>
          <div className="text-center">
            <h2 className="fw-bolder" style={{ fontSize: '2.8rem' }}>Subjects We Offer</h2>
            <p className="lead text-secondary mx-auto mt-3" style={{ maxWidth: '700px' }}>
              Tutorexel helps your child excel in every area:
            </p>
          </div>
        </Container>
        
        <Container fluid>
          <div className="horizontal-scroll-container">
            {subjectsData.map((subject, index) => (
              <Col md={5} lg={4} xl={3} key={index} className="flex-shrink-0">
                <Link to={subject.link} className="text-decoration-none d-block h-100">
                  <SubjectCard
                    icon={subject.icon}
                    title={subject.title}
                    description={subject.description}
                  />
                </Link>
              </Col>
            ))}
          </div>
        </Container>
      </section>


        <HowItWorksSection
          headingText="How It Works"
          stepsData={howItWorksSteps}
          showButton={true}
          buttonText="Take your assessment test"
          buttonIcon={<FaArrowRight />}
        />

        <LearningStyles />
        <ContentBanner
          image={teacherOk}
          imagePosition="left"
          className="bg-white"
          content={
            <h2 className="text-white fw-bolder" style={{ fontSize: '2rem', lineHeight: '1.4' }}>
              No matter which option you choose, your child receives <strong>high-quality instruction</strong>, caring support, and measurable progress.
            </h2>
          }
        />
        <FeatureSection
          imagePosition="right"
          image={progressBoy}
          headingText="Progress You Can See"
          features={progressFeatures}
          buttonText="Click here to see a sample report"
        />
        <Testimonials />
        <CTASection
          headingText="Ready to Help Your Child Succeed?"
          image={ctaFamily}
          primaryButtonText="Book Your Free Trial Class"
          primaryButtonIcon={<FaArrowRight />}
          primaryButtonTextColor="black" // The hex code for your brand orange

          secondaryButtonText="Contact Us to Learn More"
          secondaryButtonIcon={<FaArrowRight />}
          secondaryButtonTextColor="#FFFFFF" // The hex code for white
        />
    </main>
  );
};

export default HomePage;
