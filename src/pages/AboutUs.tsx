import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router";

import MarketOpportunityImg
    from "./../assets/images/lycs-architecture-U2BI3GMnSSE-unsplash-1-r3cf9uptwt436r750gpteipacqafdxkp1qgfgzgfh4.jpg"
import WhatMakesVelaSoImg
    from "./../assets/images/globe-hologram-futuristic-tech-and-woman-technology-innovation-with-future-ai-and-cyberspace-aga-r33dmqfmrj1pilokskxvab2uhy1u08ls9olgvnfwig.jpg"

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"


import BadgeAndTextCard from "../components/BadgeAndTextCard.tsx";
import FadeInUp from "../components/FadeInUp.tsx";

const badgeAndTexts1 = [
    {
        badge: "jki-cloud-light",
        title: "Generating sales and enquiries",
        description: null,
    },
    {
        badge: "jki-cloud-2-light",
        title: "Guiding users to shopping carts, enquiry forms or contact points",
        description: null,
    },
    {
        badge: "jki-badge-light",
        title: "Capturing and qualifying leads in real time",
        description: null,
    },
    {
        badge: "jki-badge-light",
        title: "Seamlessly escalating to human agents when needed",
        description: null,
    },
]

const badgeAndTexts2 = [
    {
        badge: "jki-cloud-light",
        title: "CRM platforms",
        description: null,
    },
    {
        badge: "jki-cloud-2-light",
        title: "Booking and diary management tools",
        description: null,
    },
    {
        badge: "jki-badge-light",
        title: "Support ticketing systems",
        description: null,
    },
    {
        badge: "jki-padlock-1-light",
        title: "Calendar integrations",
        description: null,
    },
    {
        badge: "jki-padlock-1-light",
        title: "Internal databases and third-party apps via API",
        description: null,
    },
]


function AboutUs() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="aboutUsPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="mb-0 text-white">Who We Are</h1>
                    </div>
                </Container>
            </section>
            <div className="py-4"></div>
            <Container>
                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="pe-0 pe-lg-5 h-100">
                                <img src={MarketOpportunityImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center align-content-center flex-wrap">
                                <h2>Market Opportunity</h2>
                                <p className="mb-5 text-20 fw-semibold">
                                    Expanding Global Al Customer Engagement Market
                                </p>
                                <p className="text-inter text-16 mb-5">
                                    We’re not just keeping pace with innovation—we’re driving it. At Vela Agent
                                    LTD, we’ve reimagined how organisations connect, communicate, and grow. We are
                                    proud to be at the forefront of a commercial revolution, delivering cutting-edge,
                                    AI-driven unified communications solutions that empower modern businesses to thrive
                                    in a digital-first world.<br/>
                                    Our platform isn’t just smart—it’s transformative.
                                </p>
                                <Button variant="secondary" as={Link as any} to="/products-services" className="mb-5 mb-lg-0">Learn
                                    More</Button>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center flex-wrap">
                                <h2>What Makes Vela So Powerful</h2>
                                <p className="text-inter text-16 mb-5">
                                    At the heart of Vela Agent is a revolutionary AI-powered assistant that
                                    integrates seamlessly with any website or phone system, acting as the most
                                    knowledgeable and efficient member of a company’s team.<br/>
                                    Unlike traditional support tools, Vela is pre-trained with everything a business
                                    wants their customers to know—sales and product information, pricing, processes,
                                    policies, FAQs, and more. It eliminates the need for customers to wait on hold or
                                    speak to multiple departments. Instead, they simply ask Vela and receive
                                    accurate, instant answers.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="ps-0 ps-lg-5 h-100">
                                <img src={WhatMakesVelaSoImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section>
                    <h2 className="text-center mb-5">
                        Vela is designed to drive business growth by:
                    </h2>
                    <Row className="align-items-stretch">
                        {badgeAndTexts1.map((block, key) => {
                            return <Col lg={3}>
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
                            <h2>Vela operates 24/7, 365 days a year. It's a tireless digital employee delivering
                                real value</h2>
                        </FadeInUp>
                        <FadeInUp className="">
                            <p className="mb-5 text-20 fw-semibold">Seamless Integration with Business Tools</p>
                        </FadeInUp>
                        <p className="col-12 col-lg-6 offset-lg-3 text-inter text-16">
                            Vela integrates directly with existing business systems, including:
                        </p>
                    </div>
                    <div className="py-4 py-lg-5"></div>
                    <div className="d-block d-lg-flex align-items-stretch justify-content-between">
                        {badgeAndTexts2.map((block, key) => {
                            return <div className="w-100 w-lg-20 px-lg-2 mb-3 mb-lg-0">
                                <FadeInUp delay={key * 200} offset={100}><BadgeAndTextCard {...block} key={key}/>
                                </FadeInUp>
                            </div>
                        })}
                    </div>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section className="section-radial-gradient-bg py-5">
                    <div className="text-center">
                        <p className="col-12 col-lg-6 offset-lg-3 text-inter text-16">
                            Whether booking appointments, retrieving account information, or updating workflows,
                            Vela becomes a vital part of a business’s digital ecosystem.
                        </p>
                    </div>
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
                                    Why It Matters
                                </h1>
                                <p className="mb-5 text-20 fw-semibold w-100">
                                    Vela Intelligence is no longer a future concept
                                </p>
                                <p className="text-inter w-100">
                                    It’s a present-day necessity. Businesses that fail to adapt will be left behind.
                                    Vela Agent equips entrepreneurs and organisations with a competitive edge in
                                    automation, communication, and profitability.
                                    <br/><br/>
                                    The future of commercial communication is intelligent, integrated, and incredibly
                                    profitable
                                </p>
                                <div className="py-3 w-100"></div>
                                <div className="w-100">
                                    <Button variant="secondary" as={Link as any} to="/contact-us">Contact Us</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutUs
