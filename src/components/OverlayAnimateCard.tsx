import {Link} from "react-router";
import HoverTranslateY from "./HoverTranslateY.tsx";
import HoverBgChange from "./HoverBgChange.tsx";

// @ts-ignore
function OverlayAnimateCard({badge, title, description, link}) {
    return <HoverBgChange overlayColor="#03212BD1" className="h-100">
        <div className="overlay-animate-card text-white h-100">
            <div className="overlay">
                <HoverTranslateY offset={50}>
                    <div className="content">
                        <div className="d-inline-block">
                            <i aria-hidden="true" className={`jki ${badge}`}></i>
                        </div>
                        <div className="py-5"></div>
                        <p className="text-23 fw-semibold">{title}</p>
                        <br/>
                        <p className="text-16 text-inter mb-4">{description ? description : ``}</p>
                        {link && <Link to={link} className="fw-medium text-decoration-none">Read More</Link>}
                    </div>
                </HoverTranslateY>
            </div>
        </div>
    </HoverBgChange>
}

export default OverlayAnimateCard;