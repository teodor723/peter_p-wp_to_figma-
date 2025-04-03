// @ts-ignore
function BusinessModelRevenueStreamsCard({img, title, description}) {
    return <div className="business-model-revenue-streams-card h-100">
        <img src={img} alt="" className="w-100 br-10"/>
        <div className="bg-white br-10 p-5 text-center white-text-block mx-5 position-relative z-1">
            <h3>{title}</h3>
            <p className="text-inter text-14">{description}</p>
        </div>
    </div>
}

export default BusinessModelRevenueStreamsCard;