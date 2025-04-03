import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router";
import {ReactNode} from "react";
import ContactMailToLink from "../components/ContactMailToLink.tsx";

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"


interface SectionTitleProps {
    children: ReactNode;
}

function SectionTitle({children} : SectionTitleProps) {
    return <>
        <br/>
        <p className="text-20 fw-semibold">{children}</p>
    </>
}

function PrivacyPolicy() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="aboutUsPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="mb-0 text-white">Privacy Policy</h1>
                    </div>
                </Container>
            </section>
            <div className="py-4"></div>
            <Container>
                <section>
                    <div className="mb-5 text-16 text-inter">
                        Vela Agent LTD (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy
                        Policy explains how we collect, use, and safeguard your personal data when you interact with our
                        website <a href="https://www.vela-agent.com" target="_blank">www.vela-agent.com</a> and our voice assistant, Vela.<br/>
                        By using our services, you agree to the terms of this Privacy Policy.<br/>
                        <SectionTitle>1. Who We Are</SectionTitle>
                        Vela Agent LTD is a UK-based company providing AI-powered voice assistant services. Our virtual
                        assistant, Vela, helps businesses and users streamline communication and automate
                        interactions.<br/>
                        For any data-related concerns, contact us at:<br/>
                        <ContactMailToLink content="📧 info@vela-agent.com"/><br/>

                        <SectionTitle>2. What Data We Collect</SectionTitle>
                        We may collect the following types of information:<br/>
                        <br/>
                        a) Information You Provide<br/>
                        <ul>
                            <li>Name, email address, phone number, company name</li>
                            <li>Messages or inquiries submitted through our website or email</li>
                            <li>Feedback or interaction logs from using Vela</li>
                        </ul>
                        b) Data Collected Automatically<br/>
                        <ul>
                            <li>IP address, browser type, device information</li>
                            <li>Usage data (pages visited, time spent, clicks)</li>
                            <li>Voice interaction data when using Vela (where applicable)</li>
                        </ul>

                        <SectionTitle>3. How We Use Your Data</SectionTitle>
                        We use your data to:<br/>
                        <ul>
                            <li>Provide and improve our services (including the Vela voice bot)</li>
                            <li>Respond to inquiries and support requests</li>
                            <li>Analyse website usage and optimize performance</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <SectionTitle>4. Sharing Your Data</SectionTitle>
                        We do not sell your personal data. We may share data with:<br/>
                        <ul>
                            <li>Trusted service providers who assist with hosting, analytics, or communication tools
                            </li>
                            <li>Legal authorities if required by law</li>
                            <li>Partners only with your explicit consent</li>
                        </ul>
                        All third parties are required to comply with data protection laws and confidentiality.<br/>

                        <SectionTitle>5. How We Store & Protect Your Data</SectionTitle>
                        <ul>
                            <li>Data is stored securely using industry-standard encryption and access control</li>
                            <li>We retain data only as long as necessary for the purposes stated</li>
                            <li>Our systems are regularly monitored and updated to protect against unauthorized access
                            </li>
                        </ul>

                        <SectionTitle>6. Your Rights</SectionTitle>
                        Depending on your location (e.g., UK, EU), you may have the right to:<br/>
                        <ul>
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction or deletion</li>
                            <li>Object to or restrict processing</li>
                            <li>Withdraw consent at any time</li>
                            <li>Lodge a complaint with a data protection authority</li>
                        </ul>
                        To exercise any of these rights, email us at <ContactMailToLink/><br/>

                        <SectionTitle>7. Cookies</SectionTitle>
                        Our website may use cookies to enhance your browsing experience. You can control cookie settings
                        in your browser.<br/>

                        <SectionTitle>8. Third-Party Links</SectionTitle>
                        Our website may contain links to other websites. We are not responsible for the privacy
                        practices of those websites.<br/>

                        <SectionTitle>9. Changes to This Policy</SectionTitle>
                        We may update this Privacy Policy occasionally. We’ll post updates on this page with a revised
                        "Effective Date."<br/>
                        <br/>
                        Questions?<br/>
                        Feel free to reach out to us at: <ContactMailToLink/>
                    </div>
                </section>
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

export default PrivacyPolicy
