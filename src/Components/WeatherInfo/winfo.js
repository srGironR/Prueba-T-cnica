import React from "react"

import  "../WeatherInfo/winfo.css"

const weatherinfo = (props) =>{
    const{icon,para,num}=props;
    return(
        <div className="o-infoContainer">
            <div className="iconW">
            <img className="iconW" src={icon} alt=""></img>
            </div>
            <div className="paraW">
                <p>{para}</p>
            </div>
            <div className="numW">
                <p>{num}</p>
            </div>
        </div>
    );
}
export default weatherinfo;