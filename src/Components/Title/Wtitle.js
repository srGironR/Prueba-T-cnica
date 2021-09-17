import React from "react"
import "../Title/Wtitle.css"
const Title = (props) =>{
  console.log("Parámetros",props);
  
  //Destructuring
  const{city,date,temp}=props;
    return(
        <div>
          <p className="wtitle">{city}</p>
          <p className="wdate">{date}</p>
          <p className="wtemp">{temp}</p>                    
        </div>
    );
}
export default Title;