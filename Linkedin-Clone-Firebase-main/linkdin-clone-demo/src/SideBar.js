import React from "react";
import "./SideBar.css";
import { Avatar } from "@mui/material";
function SideBar() {
  
     
  return (
    <div className="sidebar">

        <div className="sidebar_top">
        
          <img src="https://i.pinimg.com/originals/3a/77/24/3a772460c22160b4f62d14bed618b123.jpg" alt=""/>
           <Avatar className= 'sidebar_avatar'/>
           <h2>Rana Afaq</h2>
             <h2>ranaAfaq@gmail.com</h2>
            
            <div className="sidebar_stats">
                <div className="sidebar_stat"><p>Likes on the post</p></div>
                
                <div className="sidebar_number">4456</div>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat"><p>Views on the post</p></div>
                
                <div className="sidebar_number">4446</div>
            </div>
            
         
        </div>
            
           
        <div className="sidebar_bottom">
            <p>Recent</p>
            
          <div>
          <div className="sidebar_recent">
            <span>#</span>
            <p>React</p>
        </div>
        <div className="sidebar_recent">
            <span>#</span>
            <p>react</p>
        </div>
        <div className="sidebar_recent">
            <span>#</span>
            <p>topic</p>
        </div>
          </div>

        </div>
        
        

       
                
    </div>

   
  )
}

export default SideBar