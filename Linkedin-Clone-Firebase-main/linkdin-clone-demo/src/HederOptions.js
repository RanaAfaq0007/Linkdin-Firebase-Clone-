import { Avatar } from "@mui/material";
import React from "react";
import"./HeaderOptions.css";



function HederOptions({title,Icon,avatar}) {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption_icon"/>}
        {avatar && <Avatar className='headerOptions_icon' src={avatar}/>}
        <h3 className="headerOption_title">{title}</h3>      
    </div>
  )
}

export default HederOptions