import HoverTranslateY from "./HoverTranslateY.tsx";
import HoverBgChange from "./HoverBgChange.tsx";

// @ts-ignore
function BadgeAndTextCard2({badge, title, description}) {
    return <HoverTranslateY className="">
        <HoverBgChange className="">
            <div className="badge-and-text-card">
                <div className="d-flex justify-content-start align-items-start">
                    <div className="rounded-circle bg-black mb-3 text-white p-3 d-inline-block lh-1 me-4">
                        <i aria-hidden="true" className={`jki ${badge}`}></i>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        {description && <p className="text-inter text-16">{description}</p>}
                    </div>
                </div>
            </div>
        </HoverBgChange>
    </HoverTranslateY>
}

export default BadgeAndTextCard2;