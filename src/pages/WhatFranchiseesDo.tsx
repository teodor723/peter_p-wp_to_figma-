import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

import WhatDoesAVelaImg
    from "./../assets/images/3629610_771-scaled-r3kdz6cwss86e4weqevh0gwhkrsthpih3jj0qpxdug.jpg"

import HowToFindCustomersImg
    from "./../assets/images/christian-lue-Pyut03Gn98w-unsplash-r3cghdmsdmp2spz3us0wd1aom1ratdd8p5yuh8x5co.jpg"

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"

import BadgeAndTextCard from "../components/BadgeAndTextCard.tsx";
import FadeInUp from "../components/FadeInUp.tsx";


const badgeAndTexts1 = [
    {
        badge: "jki-cloud-light",
        title: "Customer onboarding fees",
        description: null,
    },
    {
        badge: "jki-cloud-2-light",
        title: "Monthly recurring subscriptions",
        description: null,
    },
    {
        badge: "jki-badge-light",
        title: "Ongoing usage revenue from every website or call interaction",
        description: null,
    },
]


const badgeAndTexts2 = [
    {
        badge: "jki-cloud-light",
        title: "Branded marketing materials",
        description: null,
    },
    {
        badge: "jki-cloud-2-light",
        title: "Email templates and sales scripts",
        description: null,
    },
    {
        badge: "jki-badge-light",
        title: "CRM and tracking tools",
        description: null,
    },
    {
        badge: "jki-server-solid",
        title: "Mentoring and business development support",
        description: null,
    },
]

function WhatFranchiseesDo() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="whatFranchiseesDoPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h1 className="mb-4 text-white">
                                What Franchisees Do
                            </h1>
                            <p className="text-16 text-inter text-white">
                                Simple Role, Big Potential
                            </p>
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
                                <img src={WhatDoesAVelaImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="h-100 d-flex align-items-center align-content-center flex-wrap">
                                <h2 className="mb-4">What Does a Vela Franchisee Actually Do?</h2>
                                <p className="text-inter text-16 mb-5 mt-4">
                                    It’s simple: your role is to introduce Vela to businesses.
                                    You don’t need technical expertise—just ambition and outreach. The product and
                                    platform sell themselves.<br/>
                                    <b>No Stock, No Outlay, No Overheads</b>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <FadeInUp className="">
                        <h2 className="mb-5 text-center">You earn income from:</h2>
                    </FadeInUp>
                    <Row className="align-items-stretch">
                        {badgeAndTexts1.map((block, key) => {
                            return <Col md={4}>
                                <FadeInUp delay={key * 200} offset={100}>
                                    <BadgeAndTextCard {...block} key={key}/>
                                </FadeInUp>
                            </Col>
                        })}
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <h2 className="text-center">
                        Imagine bringing in one large client
                    </h2>
                    <p className="mb-5 text-inter text-16 text-center">
                        Every time their customers interact with Vela, you earn. That’s recurring, scalable
                        income.
                    </p>

                    <div className="py-4"></div>
                    <Row className="align-items-stretch">
                        <Col lg={6}>
                            <div
                                className="h-100 d-flex align-items-center align-content-center flex-wrap ms-0 ms-lg-5">
                                <h2 className="mb-4">
                                    How to Find Customers
                                </h2>
                                <p className="text-inter text-16 mb-4 mt-4">
                                    We provide the platform, training, and tools—you provide the outreach. Proven
                                    methods include:
                                </p>
                                <ul className="text-inter text-16 mb-5">
                                    <li>Email campaigns</li>
                                    <li>Direct outreach and calls</li>
                                    <li>LinkedIn and social media promotion</li>
                                    <li>Digital advertising and SEO</li>
                                    <li>Affiliate and influencer partnerships</li>
                                    <li>Business networking and expos</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="ps-0 ps-lg-5 h-100">
                                <img src={HowToFindCustomersImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section>
                    <FadeInUp className="">
                        <h2 className="mb-5 text-center">You’ll have access to:</h2>
                    </FadeInUp>
                    <Row className="align-items-stretch">
                        {badgeAndTexts2.map((block, key) => {
                            return <Col md={3}>
                                <FadeInUp delay={key * 200} offset={100}>
                                    <BadgeAndTextCard {...block} key={key}/>
                                </FadeInUp>
                            </Col>
                        })}
                    </Row>
                </section>
            </Container>


            <section className="w-100 position-relative" id="homeHeroFooterSection">
                <div className="overlay position-absolute"></div>
                <img src={HomeHeroFooterImg} alt="" className="position-absolute bottom-0 d-none d-xxl-block"/>
                <Container className="position-relative text-center text-lg-start">
                    <Row>
                        <Col xl={{span: 6, offset: 6}}>
                            <div className="my-5 py-5 d-flex align-items-start justify-content-start flex-wrap">
                                <div className="py-0 py-lg-5">
                                    <h1>
                                        Your Success Has No Limits
                                    </h1>
                                    <p className="text-inter text-16">
                                        There are no stock limitations or overheads. This is a borderless, digital-first
                                        model with scalable earning potential. You’re not just building income—you’re
                                        building a valuable digital asset.
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

export default WhatFranchiseesDo
