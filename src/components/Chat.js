import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert} from '@material-ui/icons';


import "../styles/Chat.css";

const Chat = ({ avatarSource }) => {
    return(
        <div className="chats">
            
            <div className="chats-header">
                    <Avatar />
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

            <div className="chats-input-panel">
            
            </div>

        </div>
    );
}

export default Chat;