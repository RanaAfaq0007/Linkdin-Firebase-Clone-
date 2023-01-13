import { Avatar } from '@mui/material'
import React from 'react'
import "./Posts.css"
import LikeIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";

import sharedIcon from "@mui/icons-material/ShareOutlined";

import SendIcon from "@mui/icons-material/Send";
import InputOptions from './InputOptions';

function Posts({name,description,message,photoUrl}) {
  return (
    <div className='Posts'>

     <div className='posts_header'>
        <Avatar/>
        <div className='header_title'>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
     </div>
     <div className='posts_body'>
        <p>{message}</p>
     </div>
     <div className='posts_reactions'>
     <InputOptions Icon={LikeIcon} title = 'Like' color={"gray"}   />
            <InputOptions Icon={CommentIcon} title = 'Comment' color={"gray"}   />
            <InputOptions Icon={sharedIcon} title = 'Share' color={"gray"}   />
            <InputOptions Icon={SendIcon} title = 'Send' color={"gray"}   />
     </div>
     


    </div>
  )
}

export default Posts