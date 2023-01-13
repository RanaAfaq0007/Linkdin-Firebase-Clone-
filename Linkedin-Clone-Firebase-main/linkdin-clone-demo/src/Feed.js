import React, { useEffect, useState } from 'react'
import './Feed.css';
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from './InputOptions';
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";

import EventNoteIcon from "@mui/icons-material/EventNote";

import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Posts from './Posts';
import { db } from './firebase';
import firebase from './firebase';

function Feed() {
  const [input,setInput] = useState('');
  const [posts,setPosts] = useState([]);
   useEffect(()=>{
    Firebase.db.collection("posts").onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>(
        {
          id:doc.id,
          data:doc.data(),

        }
      )))
    })
   },[])

  const sendPost = (e)=>{
    e.preventDefault();

    firebase.db.collection('posts').add(
      {
        name :"rana afaq",
        description:"description here",
        message:input,
        photoUrl:'',
        timestamp:firebase.firestore.FieldValue.serverTimeStamp()

      }
    )

     

  } ;


  return (
    <div className='Feed'>
        <div className='feed_inputcontainer'>
         <div className='feed_input'>
            <CreateIcon/>
            <form>
                <input type='text'></input>
                <button value={input} onChange={e => setInput(e.target.value)}  onClick={sendPost} type='submit'>Send</button>
            </form>

         </div>
         <div className='feed_inputOptions'>
            <InputOptions Icon={ImageIcon} title = 'Photo' color={"green"}   />
            <InputOptions Icon={SubscriptionIcon} title = 'Vedio' color={"orange"}   />
            <InputOptions Icon={EventNoteIcon} title = 'Event' color={"gray"}   />
            <InputOptions Icon={CalenderViewDayIcon} title = 'Write Article' color={"lightgreen"}   />
         </div>
        </div>
       {posts.map((post)=>(<Posts/>))}
        <Posts
        name="Rana Afaq"
        description="description"
        message="this is the message !"
        
        
        />


    </div>
  )
}

export default Feed