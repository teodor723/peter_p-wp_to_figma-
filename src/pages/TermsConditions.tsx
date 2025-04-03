import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router";
import {ReactNode} from "react";

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"
import ContactMailToLink from "../components/ContactMailToLink.tsx";

interface SectionTitleProps {
    children: ReactNode;
}

function SectionTitle({children}: SectionTitleProps) {
    return <>
        <br/>
        <p className="text-20 fw-semibold">{children}</p>
    </>
}

function TermsConditions() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="aboutUsPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="mb-0 text-white">Terms and Conditions</h1>
                    </div>
                </Container>
            </section>
            <div className="py-4"></div>
            <Container>
                <section>
                    <div className="mb-5 text-16 text-inter">
                        Website: <a href="https://www.vela-agent.com" target="_blank">www.vela-agent.com</a><br/>
                        Company: Vela Agent LTD (Registered in the United Kingdom)<br/>
                        <br/>
                        Please read these Terms and Conditions (“Terms”) carefully before using the services provided by
                        Vela Agent LTD (“we,” “us,” “our”). By accessing or using our website, dashboard, and AI voice
                        assistant services (“Services”), you agree to be bound by these Terms.<br/>
                        <SectionTitle>1. Services Overview</SectionTitle>
                        Vela Agent LTD provides AI-powered voice assistant technology (“Vela”) for businesses,
                        supporting tasks such as customer service, call handling, booking, lead generation, and more.
                        Access to our services includes onboarding, monthly usage, and VOIP-based call handling fees, as
                        well as a user dashboard.<br/>

                        <SectionTitle>2. Account Registration & Access</SectionTitle>
                        To use our services, users must create an account. You are responsible for maintaining the
                        confidentiality of your account credentials. The dashboard allows you to manage usage data,
                        review interactions, and monitor call costs.<br/>
                        <br/>
                        We reserve the right to suspend or terminate accounts without notice if:<br/>
                        <ul>
                            <li>Payments are overdue by more than 3 days</li>
                            <li>You misuse the service or breach these Terms</li>
                            <li>You attempt to reverse engineer or manipulate our system</li>
                        </ul>
                        In such cases, any remaining account balance or credits will be void. Additionally, if your
                        service is inactive due to non-payment, we may notify any parties interacting with your Vela
                        assistant that your service has been deactivated.<br/>

                        <SectionTitle>3. User Responsibilities</SectionTitle>
                        You agree not to:<br/>
                        <ul>
                            <li>Misuse the Services or access them in an unauthorized manner</li>
                            <li>Reverse engineer, decompile, or tamper with our systems</li>
                            <li>Analyse website usage and optimize performance</li>
                            <li>Use Vela for unlawful or harmful purposes</li>
                        </ul>
                        You are fully responsible for the accuracy, legality, and integrity of any data you input or
                        upload. The performance of your Vela agent depends on the quality of the data you provide.<br/>

                        <SectionTitle>4. Fees and Payment</SectionTitle>
                        All fees are clearly detailed on our website and include:<br/>
                        <ul>
                            <li>Onboarding fees (vary by product)</li>
                            <li>Monthly subscription charges</li>
                            <li>Call-related costs via VOIP services</li>
                        </ul>
                        All fees are non-refundable. We do not offer free trials. By using our services, you agree to
                        pay all applicable charges in a timely manner.<br/>

                        <SectionTitle>5. Cancellations & Termination</SectionTitle>
                        You may cancel your subscription at any time. As this is a month-to-month contract, no refunds
                        or partial (pro rata) refunds will be issued for early cancellation.<br/>
                        We may terminate your access if you breach any of these Terms. Such termination may occur
                        without prior notice.<br/>

                        <SectionTitle>6. Intellectual Property</SectionTitle>
                        All content, code, branding, designs, models, and voice technology (including but not limited to
                        the Vela voice assistant) remain the exclusive intellectual property of Vela Agent LTD. Use of
                        our IP without written consent is strictly prohibited.<br/>

                        <SectionTitle>7. Disclaimers & Limitation of Liability</SectionTitle>
                        Our services are provided “as is” and “as available” without warranties of any kind, express or
                        implied. We do not guarantee uninterrupted or error-free operation.<br/>
                        <br/>
                        To the fullest extent permitted by law, Vela Agent LTD shall not be liable for:<br/>
                        <ul>
                            <li>Any direct, indirect, incidental, or consequential damages</li>
                            <li>Loss of data, revenue, or business opportunities</li>
                            <li>Any delay or failure caused by external service providers or technical issues</li>
                        </ul>

                        <SectionTitle>8. Governing Law</SectionTitle>
                        These Terms are governed by the laws of the United Kingdom. If you access the service from
                        outside the UK, you do so on your own initiative and are responsible for compliance with
                        applicable local laws.<br/>

                        <SectionTitle>9. Changes to These Terms</SectionTitle>
                        We may update these Terms from time to time. Any changes will be posted on this page with an
                        updated effective date. Your continued use of the Services after changes are made constitutes
                        acceptance of the new Terms.<br/>

                        <SectionTitle>10. Contact</SectionTitle>
                        If you have any questions or concerns, contact us at:<br/>
                        <ContactMailToLink content="📧 info@vela-agent.com"/>
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

export default TermsConditions
