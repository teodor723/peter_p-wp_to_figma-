import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

import ConversationalAIThatSpeaksImg
    from "./../assets/images/pexels-tara-winstead-8386440-r3cfjfoll08bjna223twblngd524uum6p5vmlj8y1k.jpg"
import SmarterBusinessSeamlessSystemsImg
    from "./../assets/images/smarter-business-seamless-systems.jpg"
import LimitlessPossibilitiesLimitlessPotential
    from "./../assets/images/neon-ai-on-a-keyboard-r33dmlqftcv9wjvek0wqfu9jj0ozxr34l1c1h9mvdk.jpg"

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"


import OverlayAnimateCard from "../components/OverlayAnimateCard.tsx";

const overlayAnimates1 = [
    {
        badge: "jki-codepen-line",
        title: `Communicate in over 30 languages via real-time text and voice translation`,
        description: null,
        link: null,
    },
    {
        badge: "jki-chat-light",
        title: `Detect customer intent and guide them to the right conversion path`,
        description: null,
        link: null,
    },
    {
        badge: "jki-crane-2-light",
        title: `Connect users with human agents when required`,
        description: null,
        link: null,
    },
]

const overlayAnimates2 = [
    {
        badge: "jki-idea_generate-light",
        title: `Capture leads and respond instantly—24/7`,
        description: null,
        link: "/",
    },
    {
        badge: "jki-Computer-light",
        title: `Reduce staffing costs while increasing revenue and efficiency`,
        description: null,
        link: null,
    }
]


function ProductsServices() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="productServicesPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="mb-0 text-white">
                            Our Platform
                        </h1>
                    </div>
                </Container>
            </section>

            <div className="py-4"></div>

            <Container>
                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="pe-0 pe-lg-5 h-100">
                                <img src={ConversationalAIThatSpeaksImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center align-content-center flex-wrap">
                                <h2 className="mb-4">Conversational AI That Speaks Their Language</h2>
                                <p className="text-inter text-16 mb-5 mt-4">
                                    Picture this: a customer lands on your website, doesn’t immediately find what they
                                    need, and leaves. A missed opportunity. Now imagine they’re met instantly by
                                    Vela—an AI assistant that speaks over 30 languages, understands intent, and
                                    guides them to what they need: a product, a representative, or a purchase.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section id="productServicesOverlayAnimateCard">
                    <h2 className="text-center">That’s the power of Vela Agent’s AI-over-IP platform.</h2>
                    <p className="text-inter text-16 text-center mb-5">Our platform is designed to:</p>
                    <div className="container-fluid">
                        <Row className="align-items-stretch">
                            {overlayAnimates1.map((block, key) => {
                                return <Col md={4} className="mb-4"><OverlayAnimateCard {...block}
                                                                                        key={key}/></Col>
                            })}
                        </Row>
                        <Row className="align-items-stretch">
                            {overlayAnimates2.map((block, key) => {
                                return <Col md={6} className="mb-4"><OverlayAnimateCard {...block}
                                                                                        key={key}/></Col>
                            })}
                        </Row>
                    </div>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6}>
                            <div
                                className="h-100 d-flex align-items-center align-content-center flex-wrap ms-0 ms-lg-5">
                                <h2 className="mb-4">
                                    Smarter Business, Seamless Systems
                                </h2>
                                <p className="text-inter text-16 mb-5 mt-4">
                                    Vela doesn’t just talk—it integrates. It syncs with booking tools, CRMs,
                                    calendars, databases, and support systems to provide a full-service experience
                                    without human intervention.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="ps-0 ps-lg-5 h-100">
                                <img src={SmarterBusinessSeamlessSystemsImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="pe-0 pe-lg-5 h-100">
                                <img src={LimitlessPossibilitiesLimitlessPotential} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center align-content-center flex-wrap">
                                <h2 className="mb-4">
                                    Limitless Possibilities, Limitless Potential
                                </h2>
                                <p className="text-inter text-16 mb-5 mt-4">
                                    From local businesses to global enterprises, Vela becomes the most reliable
                                    digital asset—selling, supporting, and scaling effortlessly. Imagine onboarding
                                    clients like the NHS, B&Q, universities or e-commerce giants—every user interaction
                                    becomes an income stream for you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>

            <div className="py-4 py-lg-5"></div>

            <section className="w-100 position-relative" id="homeHeroFooterSection">
                <div className="overlay position-absolute"></div>
                <img src={HomeHeroFooterImg} alt="" className="position-absolute bottom-0 d-none d-xxl-block"/>
                <Container className="position-relative text-center text-lg-start">
                    <Row>
                        <Col xl={{span: 6, offset: 6}}>
                            <div className="my-5 py-5 d-flex align-items-start justify-content-start flex-wrap">
                                <div className="my-0 py-0 my-lg-5 py-lg-5 w-100">
                                    <p className="text-inter text-16">
                                        With Vela Agent, you’re not just automating communication—you’re creating
                                        intelligent customer journeys that drive loyalty and profitability.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductsServices
