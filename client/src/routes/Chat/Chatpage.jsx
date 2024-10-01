import { useEffect, useRef } from 'react'
import './chatpage.css'

const Chatpage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []); 


  return (
    <div className='chatpage'>
      <div className="wrapper">
        <div className="chat">
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div className="message">Test Message Ai</div>
        <div className="message user">Test Message User</div>
        <div ref={endRef}/>
        </div>
      </div>
    </div>
  )
}

export default Chatpage