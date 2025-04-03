import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router";

import HomeHeroImg from "./../assets/images/home-hero.png";
import RoleOfAIInImg
    from "./../assets/images/WhatsApp-Image-2024-09-21-at-2.36.38-PM-r3ipp66azxnja8yc1eztp29b7bh9d4qrf0ipjzeyjc.jpeg"
import AICustomerEngagementImg
    from "./../assets/images/robot-s-hands-typing-on-keyboard-r33dn1pp1jhpuikhashunc2e0eyfuhtqwpx4nxi5hc.jpg"
import BusinessModelRevenueStreamsImg1
    from "./../assets/images/one-time-setup-fee.jpg"
import BusinessModelRevenueStreamsImg2
    from "./../assets/images/monthly-sub-fee.jpg"
import BusinessModelRevenueStreamsImg3
    from "./../assets/images/per-minute-usage.jpg"
import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"

import BadgeAndTextCard from "../components/BadgeAndTextCard.tsx";
import OverlayAnimateCard from "../components/OverlayAnimateCard.tsx";
import ProductOfferingCard from "../components/ProductOfferingCard.tsx";
import BusinessModelRevenueStreamsCard from "../components/BusinessModelRevenueStreamsCard.tsx";
import {useEffect, useState} from "react";
import FadeInUp from "../components/FadeInUp.tsx";

const badgeAndTexts1 = [
    {
        badge: "jki-cloud-light",
        title: "High Bounce Rates",
        description: "Visitors leave when they struggle to find relevant information, leading to lost potential customers.",
    },
    {
        badge: "jki-cloud-2-light",
        title: "Lost Sales Opportunities",
        description: "Lack of real-time interaction results in missed chances to convert visitors into paying customers.",
    },
    {
        badge: "jki-badge-light",
        title: "Low Lead Conversion",
        description: "Many businesses fail to capture, nurture, and convert leads effectively, impacting revenue growth.",
    },
    {
        badge: "jki-padlock-1-light",
        title: "High Costs & Limited Insights",
        description: "Maintaining large support teams is costly, and businesses often lack data to optimize engagement strategies.",
    },
]

const overlayAnimates = [
    {
        badge: "jki-codepen-line",
        title: `Conversational Al & Sales Automation`,
        description: "Vela engages customers naturally while automating outreach, follow-ups, and lead conversion.",
        link: "/",
    },
    {
        badge: "jki-codesandbox-line",
        title: "Always-On Multichannel Support",
        description: "Operates 24/7 across web, mobile, and telephony to ensure seamless customer interactions.",
        link: "/",
    },
    {
        badge: "jki-chat-light",
        title: "Global & Multilingual Capabilities",
        description: "Supports over 30 languages, expanding business reach and improving customer engagement.",
        link: "/",
    },
    {
        badge: "jki-idea_generate-light",
        title: "Data-Driven Insights & Optimization",
        description: "Provides real-time analytics to refine business strategies and enhance performance.",
        link: "/",
    },
]

const productOfferings = [
    {
        title: "BASIC",
        onboarding: "£99",
        pm: "£25",
        call: "£0.244",
        features: "Entry-level Al assistant for startups and small businesses"
    },
    {
        title: "PREMIUM",
        onboarding: "£99",
        pm: "£35",
        call: "£0.244",
        features: "Enhanced automation and analytics for growing businesses"
    },
    {
        title: "ENTERPRISE",
        onboarding: "£250",
        pm: "£100",
        call: "£0.18",
        features: "Fully customizable Al with revenue-generation capabilities"
    },
]

const badgeAndTexts2 = [
    {
        badge: "jki-cloud-light",
        title: "Expanding Market Size",
        description: "The Al chatbot industry is projected to reach $13.9 billion by 2025.",
    },
    {
        badge: "jki-cloud-2-light",
        title: "Industry-Wide Demand",
        description: "Automation is transforming E-commerce, Finance, Healthcare, and Real Estate sectors.",
    },
    {
        badge: "jki-badge-light",
        title: "Rapid Al Adoption",
        description: "SMEs and large enterprises are increasingly integrating Al for efficiency and growth.",
    },
]

const badgeAndTexts3 = [
    {
        badge: "jki-cloud-light",
        title: "Website & Document Scraping",
        description: "Al learns directly from business data for enhanced insights.",
    },
    {
        badge: "jki-cloud-2-light",
        title: "Seamless CRM, API & Telephony Integration",
        description: "Connects with 7,000+ tools (Zapier, custom APIs) and enables voice-based interactions beyond chatbots.",
    },
    {
        badge: "jki-badge-light",
        title: "Flexible & Revenue-Generating Pricing:",
        description: "Scalable pay-per-use and subscription model, allowing enterprises to set custom call charges for profit.",
    },
    {
        badge: "jki-padlock-1-light",
        title: "Powerful Al Automation",
        description: "Streamlines workflows by leveraging data-driven learning and integrated communication tools.",
    },
]

const businessModelRevenueStreams = [
    {
        img: BusinessModelRevenueStreamsImg1,
        title: "One-Time Setup Fees",
        description: "On Boarding fees payable by customers ranging from £99 to £250, a one time fee.",
    },
    {
        img: BusinessModelRevenueStreamsImg2,
        title: "Monthly Subscription Fees",
        description: "Monthly subscription fees ranging from £25 to £100 per month dependant on which plan the customer chooses.",
    },
    {
        img: BusinessModelRevenueStreamsImg3,
        title: "Per-Minute Usage Revenue",
        description: "Call usage costs via VELA's AI PBX raning from £0.18 per minute for Enterprise plan to £0.24 per minute for all other plans. Discounts available for bulk Call Credits.",
    },
]

function Home() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100); // Delay optional
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section className="position-relative mb-5" id="homeHeroSection">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <img src={HomeHeroImg} alt=""
                         className={`position-absolute bottom-0 d-none d-lg-inline-block fade-in ${loaded ? 'show' : ''}`}/>
                    <Row className="z-2 position-relative">
                        <Col lg={{span: 5}}>
                            <div className="pe-0 pe-lg-5 me-0 me-lg-4 text-capitalize">
                                <h2 className="mb-3 pb-1">The Future of Al-Powered Business Automation</h2>
                                <p className="mb-5">
                                    Vela is set to transform customer engagement and business automation through
                                    cutting-edge
                                    artificial intelligence. This pitch deck presents our vision, product offerings,
                                    market
                                    opportunity, financials, and investment potential.
                                    <br/><br/>
                                    Join us as we revolutionize AI-driven customer interactions.
                                </p>
                                <Link to="/products-services" className="d-flex justify-content-center justify-content-lg-start mb-5 mb-lg-0"><Button variant="primary">Explore Now</Button></Link>
                            </div>
                        </Col>
                        <Col lg={{span: 4, offset: 3}} className="align-content-end align-items-end">
                            <div className="mt-auto text-inter text-18">
                                <ul>
                                    <li>AI-Driven Virtual Assistant</li>
                                    <li>Scalable Business Solution</li>
                                    <li>Intelligent Customer Engagement</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <section>
                    <div className="text-center">
                        <FadeInUp className="">
                            <h1>The Problem</h1>
                        </FadeInUp>

                        <FadeInUp className="">
                            <h2>Challenges in Customer Engagement & Business Growth</h2>
                        </FadeInUp>
                        <p className="text-inter text-black col-12 col-md-6 offset-md-3 text-16">
                            Businesses today struggle with high website bounce rates, lost sales, and inefficient
                            customer engagement. Vela AI addresses these challenges with intelligent automation,
                            improving customer retention, reducing costs, and increasing sales conversions
                        </p>
                    </div>
                    <div className="py-4"></div>
                    <Row className="align-items-stretch">
                        {badgeAndTexts1.map((block, key) => {
                            return <Col md={6} lg={3}>
                                <FadeInUp delay={key * 200} offset={100}>
                                    <BadgeAndTextCard {...block} key={key}/>
                                </FadeInUp>
                            </Col>
                        })}
                    </Row>
                </section>
                <div className="py-4 py-lg-5"></div>
                <section id="homeOverlayAnimateCard">
                    <Row>
                        <Col lg={{span: 4}}>
                            <p className="text-23 fw-semibold">Al-Powered Automation for Smarter Engagement</p>
                            <p className="text-inter text-16">
                                Al provides an all-in-one virtual assistant that enhances customer experience, improves
                                lead generation, and reduces operational costs. Our Al-driven platform integrates
                                seamlessly with businesses to offer intelligent automation and actionable insights.
                            </p>
                            <Button variant="primary" as={Link as any} to={'/products-services'} className="mb-5 mb-lg-0">All Services</Button>
                        </Col>
                        <Col lg={{span: 8}}>
                            <div className="container-fluid">
                                <Row className="align-items-stretch ps-0 ms-lg-5 ps-lg-5">
                                    {overlayAnimates.map((block, key) => {
                                        return <Col md={6} className="mb-4"><OverlayAnimateCard {...block}
                                                                                                key={key}/></Col>
                                    })}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section className="col-12 col-lg-10 offset-lg-1">
                    <div className="text-center">
                        <FadeInUp className="">
                            <h1>Product Offerings</h1>
                        </FadeInUp>
                        <p className="text-inter col-12 col-lg-8 offset-lg-2 text-16 mb-5">
                            We offers three Al solutions to cater to businesses of all sizes, from
                            startups to large enterprises. Each plan provides unique features and pricing models
                            designed to maximize efficiency and revenue generation.
                        </p>
                        <Row className="align-items-stretch">
                            {productOfferings.map((block, key) => {
                                return <Col md={4} className="mb-4 mb-lg-0"><ProductOfferingCard {...block} key={key}/></Col>
                            })}
                        </Row>
                    </div>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="pe-0 pe-lg-5 h-100">
                                <img src={RoleOfAIInImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center align-content-center flex-wrap">
                                <h1>Market Opportunity</h1>
                                <p className="mb-4 text-23 fw-semibold">Expanding Global Al Customer Engagement
                                    Market</p>
                                <Row>
                                    <Col lg={7}>
                                        <p className="text-inter text-16">
                                            The AI-powered customer engagement market is growing rapidly, creating
                                            vast
                                            opportunities for Vela. With increasing AI adoption across
                                            industries,
                                            our platform is positioned to capture significant market share.
                                        </p>
                                    </Col>
                                    <Col lg={5} className="d-none d-lg-flex">
                                        <div className="ps-4">
                                            <img src={AICustomerEngagementImg} alt="" className="w-100 br-10"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Button variant="secondary" as={Link as any} to="/products-services" className="mb-5 mb-lg-0">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        {badgeAndTexts2.map((block, key) => {
                            return <Col md={4}>
                                <FadeInUp delay={key * 200} offset={100}>
                                    <BadgeAndTextCard {...block} key={key}/>
                                </FadeInUp>
                            </Col>
                        })}
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section>
                    <div className="text-center">
                        <FadeInUp className="">
                            <h1>Competitive Advantage</h1>
                        </FadeInUp>
                        <FadeInUp className="">
                            <h2>What Sets Vela Apart?</h2>
                        </FadeInUp>
                        <p className="col-12 col-lg-6 offset-lg-3 text-inter text-16">
                            AI differentiates itself from traditional chatbots by offering an intelligent, scalable, and
                            telephony-integrated solution. Our ability to scrape and integrate business data, coupled
                            with voice automation, gives us a significant edge over competitors.
                        </p>
                    </div>
                    <div className="py-4 py-lg-5"></div>
                    <Row className="align-items-stretch">
                        {badgeAndTexts3.map((block, key) => {
                            return <Col md={6} lg={3}>
                                <FadeInUp delay={key * 200} offset={100}><BadgeAndTextCard {...block} key={key}/>
                                </FadeInUp>
                            </Col>
                        })}
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section className="section-radial-gradient-bg">
                    <div className="text-center">
                        <h1>Business Model & Revenue Streams</h1>
                        <p className="text-inter text-16">Hybrid Subscription & Pay-Per-Use Model</p>
                        <p className="col-12 col-lg-6 offset-lg-3 text-inter text-16">
                            AI employs a scalable and profitable business model that includes one-time setup fees,
                            recurring subscriptions, and usage-based revenue streams. This ensures stable revenue
                            generation and long-term growth.
                        </p>
                    </div>
                    <div className="py-4 py-lg-5"></div>
                    <Row className="align-items-stretch">
                        {businessModelRevenueStreams.map((block, key) => {
                            return <Col lg={4} className="mb-5"><BusinessModelRevenueStreamsCard {...block} key={key}/></Col>
                        })}
                    </Row>
                </section>
                <div className="py-4 py-lg-5"></div>
            </Container>

            <section className="w-100 position-relative" id="homeHeroFooterSection">
                <div className="overlay position-absolute"></div>
                <img src={HomeHeroFooterImg} alt="" className="position-absolute bottom-0 d-none d-xxl-block"/>
                <Container className="position-relative text-center text-lg-start">
                    <Row>
                        <Col xl={{span: 6, offset: 6}}>
                            <div className="my-5 py-5 d-flex align-items-start justify-content-start flex-wrap">
                                <h1 className="w-100">
                                    Join Us in Shaping the Future of Al Automation
                                </h1>
                                <p className="text-inter w-100">
                                    We invite you to be part of VELA AI’s journey in revolutionizing
                                    AI-powered business automation. Invest today and help shape the future of AI-driven
                                    engagement.
                                </p>
                                <ul className="text-inter w-100">
                                    <li>Invest in Vela AI today!</li>
                                    <li>Let’s Drive the Future of Customer Engagement & Business Growth Together.</li>
                                </ul>
                                <div className="py-3 w-100"></div>
                                <div className="w-100">
                                    <Button variant="secondary" as={Link as any} to="/contact-us" className="mx-auto">Contact Us</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home
