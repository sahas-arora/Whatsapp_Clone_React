import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { SelectedSeed } from "../hooks/selectedSeed";

import "../styles/SideBarChat.css";

const SideBarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');
    const [selectedSeed, setSelectedSeed] = SelectedSeed();
    let url = `https://avatars.dicebear.com/api/human/${seed}.svg`;


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 10000));
    }, []);
    
    const createChat = () => {
        const chatDetails = prompt("Enter the name of the contact");

        if (chatDetails) {
            //Do some database stuff    
        } 

    };

    return !addNewChat ? (
        <div 
            className="sidechat-container"
            onClick={() => setSelectedSeed(seed)}
        >
            <Avatar src={url}/>
            <div className="sidechat-info">
                <h2>Number</h2>
                <div>This is the message</div>
            </div>
        </div>
    ) : 
    <div className="sidechat-container" onClick={createChat}>
        <h2>Add New Chat</h2>
    </div>
}

export default SideBarChat;