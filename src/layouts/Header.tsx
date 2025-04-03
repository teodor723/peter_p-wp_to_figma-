import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logoImg from "./../assets/images/logo.svg";
import mobileLogoImg from "./../assets/images/logo_white.svg";

import { NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function Header() {
    const [show, setShow] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products-services");
        setShowOffcanvas(false); // Close offcanvas after navigating
    };

    const [scrollY, setScrollY] = useState(0);
    const [scrollDir, setScrollDir] = useState("up");
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!isDesktop) return;

            const currentY = window.scrollY;
            setScrollY(currentY);
            setScrollDir(currentY > lastScrollY ? "down" : "up");
            lastScrollY = currentY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isDesktop]);

    let headerClass = "";
    if (isDesktop && scrollY > 50) headerClass += " fixed";
    if (isDesktop && scrollY > 100 && scrollDir === "down") headerClass += " hidden";
    if (isDesktop && scrollDir === "up") headerClass += " visible";

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" data-bs-theme="light" className={`border-bottom py-0 ${headerClass}`}>
                <Container>
                    <Navbar.Brand as={Link} to="">
                        <img
                            alt="Logo"
                            src={logoImg}
                            height="130"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setShowOffcanvas(true)} aria-controls="headerOffCanvas" className="btn-primary" />
                    <Navbar.Offcanvas
                        id="headerOffCanvas"
                        show={showOffcanvas}
                        onHide={() => setShowOffcanvas(false)}
                        aria-labelledby="headerOffCanvasLabel"
                        placement="start"
                        className="text-white"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="headerOffCanvasLabel">
                                <Navbar.Brand as={Link} to="">
                                    <img
                                        alt="Logo"
                                        src={mobileLogoImg}
                                        height="130"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mx-auto flex-lg-row flex-column text-black">
                                <Nav.Link as={Link} to="/" className="fw-medium px-3" onClick={() => setShowOffcanvas(false)}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/about-us" className="fw-medium px-3" onClick={() => setShowOffcanvas(false)}>About Us</Nav.Link>

                                <div
                                    className="fw-medium px-3"
                                    onMouseEnter={() => setShow(true)}
                                    onMouseLeave={() => setShow(false)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <NavDropdown
                                        show={show}
                                        key={show ? 'show' : 'hide'}
                                        id="navbarScrollingDropdown"
                                        title={
                                            <span className="d-inline-flex align-items-center fw-medium"
                                                onClick={handleClick}>
                                                Products &amp; Services
                                                <i aria-hidden="true" className="jki jki-chevron-down-light ms-2" />
                                            </span>
                                        }
                                        as="div"
                                    >
                                        <NavDropdown.Item
                                            as={Link}
                                            to="/franchise-opportunity"
                                            className="fw-medium p-3 text-14"
                                            onClick={() => setShowOffcanvas(false)}
                                        >
                                            Franchise Opportunity
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            as={Link}
                                            to="/what-franchisees-do"
                                            className="fw-medium p-3 text-14"
                                            onClick={() => setShowOffcanvas(false)}
                                        >
                                            What Franchisees Do
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            as={Link}
                                            to="/investment-opportunities"
                                            className="fw-medium p-3 text-14"
                                            onClick={() => setShowOffcanvas(false)}
                                        >
                                            Investment Opportunities
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>

                                <Nav.Link as={Link} to="/contact-us" className="fw-medium px-3" onClick={() => setShowOffcanvas(false)}>
                                    Contact Us
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
