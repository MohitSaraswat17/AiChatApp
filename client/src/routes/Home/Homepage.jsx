import { Link } from 'react-router-dom'
import {useState} from "react"
import './homepage.css'
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {

  const[typingStatus,setTypingStatus] = useState("human1");

  

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Alpha AI</h1>
        <h2>Make your ideas more valuable and meaningful</h2>
        <h3>
          A PLACE WHERE MAGIC IS MAGIC AND TECHNOLOGY IS TECHNOLOGY. WE BELIEVE
        </h3>
        <Link to={"/dashboard"}>Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
          <img src={typingStatus==="human1" ? "/human1.jpeg":typingStatus==="bot" ? "bot.png":"/human2.jpeg"} alt="" />
            <TypeAnimation
              sequence={[
                "Human: I love you.",
                2000,()=>{
                  setTypingStatus("bot");
                },
                "Alpha: It is inappropriate.",
                2000,()=>{
                  setTypingStatus("human2");
                },
                "Human: I love Gpt",
                2000,
                ()=>{
                  setTypingStatus("bot");
                },
                "Alpha: I am not Gpt.",
                2000,
                ()=>{
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage