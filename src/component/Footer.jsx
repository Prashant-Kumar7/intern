import React from "react";

function Footer(){
    return <div className="footer-div">
        <div style={{width : "100%"}} className="sub-footer-div">
            <div>
                <span>Copyright@2024</span>
                <span>HodlInfo.com</span>
           
            </div>
            <span >Support</span>
        </div>
        <div style={{minWidth : "100%" , backgroundColor : "#1c232b"}}  className="fixed-div">
            <button>Add HodlInfo to home screen</button>
        </div>
    </div>
}

export default Footer;