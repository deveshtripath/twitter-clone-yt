import React from 'react'
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="dev"
                message="hi"
                timestamp="1min ago"
                profilePic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf"
            />
            <Chat
                name="devesh"
                message="hi"
                timestamp="1min ago"
                profilePic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf"
            />
            <Chat
                name="suj"
                message="hi"
                timestamp="1min ago"
                profilePic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf"
            />
            <Chat
                name="sujai"
                message="hi"
                timestamp="1min ago"
                profilePic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf"
            />
        </div>
    )
}

export default Chats
