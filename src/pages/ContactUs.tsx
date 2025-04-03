import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router";

import HowToFindCustomersImg
    from "./../assets/images/alex-knight-2EJCSULRwC8-unsplash-1.jpg"

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"

import FadeInUp from "../components/FadeInUp.tsx";
import BadgeAndTextCard2 from "../components/BadgeAndTextCard2.tsx";
import ContactForm from "../components/ContactForm.tsx";


const badgeAndTexts1 = [
    {
        badge: "jki-map-marker1-light",
        title: "Head Office:",
        description: "3rd Floor, 86-90 Paul Street, London, EC2A 4NE, United Kingdom",
    },
    {
        badge: "jki-email1-light",
        title: "Email:",
        description: <a href="mailto:franchise@vela-agent.com" className="text-black">franchise@vela-agent.com</a>,
    },
]




function ContactUs() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="contactUsPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h1 className="text-white">
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </Container>
            </section>

            <div className="py-5"></div>

            <Container>
                <section>
                    <Row>
                        <Col lg={{span: 6}} className="pe-lg-5">
                            <h1>Get in Touch With Us</h1>
                            <p className="text-inter text-16 mb-5">
                                Whether you’re ready to launch your Vela franchise, interested in securing your
                                shareholding, or simply want to learn more. Our team is here to support you.<br/>
                                Please fill out the contact form below and one of our Franchise & Investment
                                Advisors will be in touch shortly.
                            </p>
                            <h2>Prefer to Contact Us Directly?</h2>
                            <p className="text-inter text-16 mb-5 lh-base">
                                You’re welcome to reach out via phone or email:
                            </p>
                            {badgeAndTexts1.map((block, key) => {
                                return <FadeInUp delay={key * 200} offset={100} className="">
                                    <BadgeAndTextCard2 {...block} key={key}/>
                                </FadeInUp>
                            })}
                        </Col>
                        <Col lg={{span: 6}} className="border-none">
                            <div className="ms-0 ms-lg-5">
                                <ContactForm/>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6}>
                            <div
                                className="h-100 d-flex align-items-center align-content-center flex-wrap ms-0 ms-lg-5">
                                <FadeInUp className="">
                                    <h2 className="mb-4">
                                        What Happens Next
                                    </h2>
                                </FadeInUp>
                                <ul className="text-18 mb-5 lh-base text-lato fw-light">
                                    <li>A member of our team will review your enquiry.</li>
                                    <li>We’ll contact you to arrange a Discovery Call or send your requested
                                        information.
                                    </li>
                                    <li>You’ll receive our Franchise & Investment Prospectus.</li>
                                    <li>If you decide to move forward, we’ll guide you through onboarding and
                                        training.
                                    </li>
                                    <li>You’ll launch your business and start growing your income and equity.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="h-100 about-us-image-overlay position-relative">
                                <img src={HowToFindCustomersImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
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
                                <p className="mb-5 text-20 fw-semibold w-100">
                                    This Is More Than a Business
                                </p>
                                <p className="text-inter w-100">
                                    AI is transforming the future of communication and Vela Agent LTD is leading
                                    the way. With only a limited number of franchise and shareholding opportunities
                                    available, now is the time to act.
                                    <br/><br/>
                                    The future of commercial communication is intelligent, integrated, and incredibly
                                    profitable
                                </p>
                                <div className="w-100">
                                    <Button variant="secondary" as={Link as any} to="/products-services">Let’s build your
                                        future</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactUs
