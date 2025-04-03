// @ts-ignore
function ProductOfferingCard({title, onboarding, pm, call, features}) {
    return <div className="product-offering-card p-5 text-center text-white h-100">
        <h3 className="text-white text-oswald">{title}</h3>
        <p className="text-rubick plan">PLAN</p>
        <p className="text-rubick fw-light description mb-4">
            {onboarding} onboarding {pm}/PM<br/>
            {call} CALL COSTS
        </p>
        <p className="col-12 col-lg-6 offset-lg-3 features text-open-sans">
            {features}
        </p>
    </div>
}

export default ProductOfferingCard;