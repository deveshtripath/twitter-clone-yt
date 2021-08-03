import React,{useState} from 'react'
import "./ChatScreen.css"
import  Avatar  from '@material-ui/core/Avatar'


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:'devesh tri',
            image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf',
            message:"whats up",
        },{
            name:'devesh',
            image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf',
            message:"whats up",
        }
    ]);
    const handleSend= (e)=>{
        e.preventDefault();

        setMessages([...messages,{message: input}]);
        setInput('');
    }


    return (
        <div className="chatScreen">
            <p>YOU MATCH WITH ELLEN</p>
            {messages.map(message =>(
                message.name ? (
                    <div className="chatScreen__message">
                <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                />
                <p className="chatScreen__text">{message.message}</p>
                </div>
                ): (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p></div>
                )
                
            ))}
            <div >
                <form className="chatScreen__input">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message..." type="text"  />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
