import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HederOptions';
import HomeIcon from "@mui/icons-material/Home";
import SuperVisorAccounIcon from "@mui/icons-material/SupervisorAccount";
import BuisnessCentreIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";





function Header() {
  return (
    <div className="header">
       <div className="header_left">
        <img src="https://www.renlearn.co.uk/wp-content/uploads/2020/04/LinkedIn-Logo.png" alt=""/>
      
      <div className="header_search">
        <SearchIcon/>
        <input type="text"/>

      </div>
      
      
       </div>
       <div className="header_right">
        <HeaderOptions title="Home" Icon={HomeIcon}/>
        <HeaderOptions title="My Network" Icon={SuperVisorAccounIcon}/>
        <HeaderOptions title="Jobs" Icon={BuisnessCentreIcon}/>
        <HeaderOptions title="Chat" Icon={ChatIcon}/>
        <HeaderOptions title="Notification" Icon={NotificationIcon}/>
        <HeaderOptions avatar={"https://tse2.mm.bing.net/th?id=OIP.eLKf_iu82B82ZGZc1s8PaAHaFK&pid=Api&P=0&w=226&h=157"} title={"Me"}/>
        </div>  

    </div>
  )
}

export default Header