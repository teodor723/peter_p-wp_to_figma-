import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router";


import BuildABusinessThatImg
    from "./../assets/images/job-poster-q@3x-r3cgmv0w8u7aiu0du5cjwnhhcyqdpt4vgayt9csh20.jpg"

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"
import ResponsiveTable from "../components/ResponsiveTable.tsx";
import OverlayAnimateCard from "../components/OverlayAnimateCard.tsx";


const tableData = {
    cols: [
        "Franchise Tier",
        "Initial Investment",
        "5-Year Income Potential",
    ],
    rows: [
        [
            "Bronze",
            "£2,999",
            "Up to £830,000+",
        ],
        [
            "Silver",
            "£4,999",
            "Up to £1.1 million+",
        ],
        [
            "Gold",
            "£9,999",
            "Up to £1.4 million+",
        ],
    ]
}


const overlayAnimates = [
    {
        badge: "jki-codepen-line",
        title: `Onboarding fees`,
        description: null,
        link: null,
    },
    {
        badge: "jki-chat-light",
        title: `Monthly subscription revenue`,
        description: null,
        link: null,
    },
    {
        badge: "jki-crane-2-light",
        title: `Usage-based billing (per-minute charges)`,
        description: null,
        link: null,
    },
    {
        badge: "jki-coins1-light",
        title: `Optional shareholding growth`,
        description: null,
        link: null,
    },
]


function FranchiseOpportunity() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="franchiseOpportunityPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h1 className="text-white">
                                Start Your Own AI Business
                            </h1>
                        </div>
                    </div>
                </Container>
            </section>

            <div className="py-4"></div>

            <Container>
                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="pe-0 pe-lg-5 h-100">
                                <img src={BuildABusinessThatImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center align-content-center flex-wrap">
                                <h2 className="mb-4">Build a Business That Builds Your Future</h2>
                                <p className="text-inter text-16 mb-5 mt-4">
                                    Welcome to a next-generation franchise model—digital-first, AI-driven, and built for
                                    limitless income potential.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <Row>
                        <Col lg={{span: 6}}>
                            <div
                                className="h-100 d-flex align-items-center align-content-center flex-wrap ms-0 ms-lg-5">
                                <p className="text-23 fw-semibold mb-5">
                                    Choose Your Level. Set Your Pace.
                                </p>
                                <ResponsiveTable tableData={tableData}/>
                                <p className="text-inter text-16 my-4">
                                    Each package includes full access to the Vela platform, marketing tools, expert
                                    guidance, and unlimited earning potential.
                                </p>
                                <Button variant="secondary" as={Link as any} to="/products-services" className="mb-5 mb-lg-0">Learn
                                    More</Button>
                            </div>
                        </Col>
                        <Col lg={{span: 6}}>
                            <div className="h-100 me-0 me-lg-5">
                                <div
                                    className="franchise-opportunity-image-card h-100  d-flex justify-content-center align-items-center py-5 py-lg-0">
                                    <div className=" py-5 py-lg-0">
                                        <p className="content text-inter text-20 text-white">
                                            At Vela Agent, we offer modern entrepreneurs a turnkey opportunity to
                                            launch their own business in one of the fastest-growing sectors in the
                                            world: AI-powered business communication.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section id="franchiseOpportunityOverlayAnimateCard">
                    <h2 className="mb-5 pb-1 text-center">
                        Recurring Revenue Model
                    </h2>
                    <p className="text-inter text-16 text-center mb-5">
                        Every customer you onboard becomes a long-term income stream. You earn from:
                    </p>
                    <div className="container-fluid">
                        <Row className="align-items-stretch">
                            {overlayAnimates.map((block, key) => {
                                return <Col md={3} className="mb-4"><OverlayAnimateCard {...block}
                                                                                        key={key}/></Col>
                            })}
                        </Row>
                    </div>
                </section>
                <div className="py-4 py-lg-5"></div>
                <p className="text-inter text-16 text-center">
                    The more customers your clients attract, the more you earn—automatically, every month.
                </p>
            </Container>
            <div className="py-4 py-lg-5"></div>

            <section className="w-100 position-relative" id="homeHeroFooterSection">
                <div className="overlay position-absolute"></div>
                <img src={HomeHeroFooterImg} alt="" className="position-absolute bottom-0 d-none d-xxl-block"/>
                <Container className="position-relative text-center text-lg-start">
                    <Row>
                        <Col xl={{span: 6, offset: 6}}>
                            <div className="my-5 py-5 d-flex align-items-start justify-content-start flex-wrap">
                                <div className="py-0 py-lg-5">
                                    <h1>
                                        A Global Opportunity with No Limits
                                    </h1>
                                    <p className="text-inter text-16">
                                        There are no territories. No geographical restrictions. You can market and sell
                                        Vela services to businesses anywhere in the world—from SMEs to global
                                        organisations like Amazon, British Airways, or major healthcare providers.
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

export default FranchiseOpportunity
