import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

import WhatDoesAVelaImg
    from "./../assets/images/pexels-cottonbro-6153354-r3cg72cje2kteqyf2tj9i4zlyulbcxf9m4a1wy7nmg.jpg"
import RealBusinessRealWealthImg
    from "./../assets/images/pexels-kevin-ku-92347-577585-r3cg8bgsi4akw14vrd1cttlqhcexmeedsblcy8crbs.jpg"

import HomeHeroFooterImg from "./../assets/images/robot-ZHM8ZSZ.png"
import ResponsiveTable from "../components/ResponsiveTable.tsx";


const tableData = {
    cols: [
        "Franchise Package",
        "Investment",
        "Shareholding",
        "Estimated Future Equity (550x ROI)",
    ],
    rows: [
        [
            "Bronze",
            "£2,999",
            "0.15 Shares",
            "£1.65 million",
        ],
        [
            "Silver",
            "£4,999",
            "0.25 Shares",
            "£2.75 million",
        ],
        [
            "Gold",
            "£9,999",
            "0.5 Shares",
            "£5.5 million",
        ],
    ]
}


function InvestmentOpportunities() {
    return (
        <>
            <section className="position-relative mb-5 sub page-banner" id="investmentOpportunitiesPageBanner">
                <div className="overlay"></div>
                <Container className="z-1 position-relative">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h1 className="mb-4 text-white">
                                Investment Opportunities
                            </h1>
                            <p className="text-16 text-inter text-white">
                                Own a Franchise. Own a Stake in the Future.
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
                                    platform sell themselves.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section className="text-center">
                    <h2 className="mb-5">Franchise + Equity = Dual Income, Dual Growth</h2>
                    <p className="text-inter text-16 mb-5">
                        As we prepare to launch, we’re offering a limited-time opportunity for early franchisees to also
                        become founding shareholders in Vela Agent LTD.
                    </p>
                    <ResponsiveTable tableData={tableData}/>

                    <p className="text-inter text-16 my-5">
                        Each share is valued at £20,000. Equity is exclusively available to pre-launch franchisees only.
                    </p>
                </section>

                <div className="my-0 my-lg-5 py-5"></div>

                <section>
                    <Row className="align-items-stretch">
                        <Col lg={6}>
                            <div
                                className="h-100 d-flex align-items-center align-content-center flex-wrap ms-0 ms-lg-5">
                                <h2 className="mb-4">
                                    Real Business. Real Wealth.
                                </h2>
                                <p className="text-inter text-16 mb-5 mt-4">
                                    You build monthly income from your customers while also holding equity in a
                                    fast-scaling AI company. Your shareholding grows as the company scales—providing the
                                    potential for substantial capital returns on exit.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-0">
                            <div className="ps-0 ps-lg-5 h-100">
                                <img src={RealBusinessRealWealthImg} alt="" className="w-100 br-10"/>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="py-4 py-lg-5"></div>

                <section className="text-center">
                    <h2 className="mb-4">
                        Limited Availability – Only 20% Shareholding Offered
                    </h2>
                    <p className="text-inter text-16">
                        Only 20% of total company equity is being released during this pre-launch round—first come,
                        first served.
                    </p>
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
                                        Option to Invest More
                                    </h1>
                                    <p className="text-inter text-16">
                                        With Vela Agent, you’re not just automating communication—you’re creating
                                        intelligent customer journeys that drive loyalty and profitability.
                                        <br/>
                                        <b>Now is the time to act!</b>
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

export default InvestmentOpportunities
