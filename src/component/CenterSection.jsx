import React from "react";

function CenterSection(){
    return <div className="center-section" >
        <div className="sub-sections">
            <div className="percent">00%</div>
            <div className="time-period">5 Mins</div>
        </div>
        <div className="sub-sections">
            <div className="percent">00%</div>
            <div className="time-period">1 Hour</div>
        </div>

        <div className="price-sub-sections">
            <div className="amount-heading">Best Price to Trade</div>
            <div className="amount"> $ Amount </div>
            <div className="amount-discription">Average BTC/INR net price including commission</div>
        </div>

        <div className="sub-sections">
            <div className="percent">00%</div>
            <div className="time-period">1 Day</div>
        </div>
        <div className="sub-sections">
            <div className="percent">00%</div>
            <div className="time-period">7 Days</div>
        </div>
        
    </div>
}

export default CenterSection;