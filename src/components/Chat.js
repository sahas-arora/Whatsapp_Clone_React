import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from '@material-ui/icons';

import { SelectedSeed } from "../hooks/selectedSeed";


import "../styles/Chat.css";

const Chat = ({ currentSeed }) => {

    const [message, setMessage] = useState('');
    const [selectedSeed, setSeed] = SelectedSeed();
    

    
    // console.log("selected seed is ", selectedSeed);
    
    // console.log("Chat yo ", selectedSeed);
    const url = currentSeed ? `https://avatars.dicebear.com/api/human/${currentSeed}.svg` : null;
    
    return(
        <div className="chats">
            
            <div className="chats-header">
                    <Avatar src={url} />
                    {/* <Avatar src={avatarSource} /> */}

                <div className="chats-header-info">
                    <h3>Number</h3>
                    <p>Last seen on .....</p>
                </div>

                <div className="chats-header-icons">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chats-body">
                <p className="chats-message chats-receiver">
                    <span className="chat-name">Sahas Arora</span>
                    Hey there!
                    <span className="chat-timestamp">3:54 pm</span>
                </p>
            </div>

            <div className="chats-footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>

                <form>
                    <input 
                    placeholder="Type a message"
                    value={message}
                    onChage={event => setMessage(event.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>

                <IconButton>
                    <Mic />
                </IconButton>
                

            </div>

        </div>
    );
}

export default Chat;