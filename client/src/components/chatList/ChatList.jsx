import React from 'react';
import { Link } from 'react-router-dom'
import "./chatList.css";
import { useQuery } from '@tanstack/react-query';
const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/userchats`,{
        credentials:"include"
      }).then((res) =>
        res.json(),
      ),
  })


  return (
    <div className='chatList'>
        <span className='title'>RECENT CHATS</span>
        <Link to="/dashboard">New Chat</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <hr />
        <div className="list">
            {isPending ?"Loading...." : error ? "Something went Wrong" : data?.map((chat)=>(
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}> {chat.title}</Link>
            ))}
            
        </div>
        <hr />
        <div className="upgrade">  
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span>Upgrade to Alpha AI Pro</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList