import React from 'react';
import { Link } from 'react-router-dom'
import "./chatList.css";
const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>RECENT CHATS</span>
        <Link to="/dashboard">New Chat</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <hr />
        <div className="list">
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
            <Link to="/">My Chat title</Link>
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