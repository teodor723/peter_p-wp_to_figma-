import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router";
import logoImg from "./../assets/images/logo.svg";
import {useState} from "react";

function Footer() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products-services");
    };
    return <footer data-bs-theme="light" className="text-center text-lg-start">
        <Container className="pt-5">
            <div className="d-flex d-flex align-items-center justify-content-between items flex-wrap">
                <div className="order-1 order-lg-0 mb-4 w-100 w-lg-auto">
                    <Nav.Link as={Link} to="" className="fw-medium text-black px-3 d-inline-block">Home</Nav.Link>
                    <Nav.Link as={Link} to="about-us" className="fw-medium text-black px-3  d-inline-block">About
                        Us</Nav.Link>
                    <div
                        className="fw-medium px-3 d-inline-block"
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                        style={{cursor: "pointer"}}

                    >
                        <NavDropdown
                            show={show}
                            key={show ? 'show' : 'hide'} // Adding a key for re-rendering when dropdown toggles
                            id="navbarScrollingDropdown"
                            title={
                                <span className="d-inline-flex align-items-center fw-medium"
                                      onClick={handleClick}>
                                                Products &amp; Services
                                                <i aria-hidden="true"
                                                   className="jki jki-chevron-down-light ms-2"/>
                                              </span>
                            }
                            as="div"
                        >
                            <NavDropdown.Item
                                as={Link}
                                to="/franchise-opportunity"
                                className="fw-medium p-3 text-12"
                            >
                                Franchise Opportunity
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/what-franchisees-do"
                                className="fw-medium p-3 text-12"
                            >
                                What Franchisees Do
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/investment-opportunities"
                                className="fw-medium p-3 text-12"
                            >
                                Investment Opportunities
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <Nav.Link as={Link} to="contact-us" className="fw-medium text-black px-3  d-inline-block">Contact
                        Us</Nav.Link>
                </div>
                <Navbar.Brand as={Link} to="/" className="order-0 order-lg-1 mb-4 w-100 w-lg-auto">
                    <img
                        alt=""
                        src={logoImg}
                        height="54"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <div className="order-2 mb-4 w-100 w-lg-auto">
                    <Nav.Link as={Link} to="/privacy-policy" className="fw-medium text-black px-3 d-inline-block">Privacy Policy</Nav.Link>
                    <Nav.Link as={Link} to="/terms-conditions" className="fw-medium text-black px-3 d-inline-block">T & C's</Nav.Link>
                </div>
            </div>
        </Container>

        <Container className="mb-4 pb-2">
            <p className="text-inter text-14">
                © 2025 VELA AGENT LTD. All rights reserved.<br/>
                VELA AGENT LTD is a company registered in England and Wales.<br/><br/>
                Company Number: 16361315<br/>
                Registered Office: 3rd Floor, 86-90 Paul Street, London, EC2A 4NE, United Kingdom.
            </p>
        </Container>
    </footer>
}

export default Footer