import HoverTranslateY from "./HoverTranslateY.tsx";
import HoverBgChange from "./HoverBgChange.tsx";

// @ts-ignore
function BadgeAndTextCard({badge, title, description}) {
    return <HoverTranslateY>
        <HoverBgChange>
            <div className="badge-and-text-card h-100">
                <div className="rounded-circle bg-black mb-3 text-white p-3 d-inline-block lh-1">
                    <i aria-hidden="true" className={`jki ${badge}`}></i>
                </div>
                <h3>{title}</h3>
                { description && <p className="text-inter text-16">{description}</p>}
            </div>
        </HoverBgChange>
    </HoverTranslateY>
}

export default BadgeAndTextCard;