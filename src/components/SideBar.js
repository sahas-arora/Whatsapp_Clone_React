import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from '@material-ui/icons';


import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "../styles/SideBar.css";

const SideBar = () => {
    const style = {
        iconStyles: {
            margin: "10px"
        }
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchBarClicked, changeSearchBarIcon] = useState(false);

    return(
        <div className="sidebar-container">
        
            <div className="sidebar-header">

                <div className="sidebar-profile">
                    <Avatar style={style.iconStyles}/>
                </div>
                
                <div className="sidebar-links">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            
            <div className="sidebar-search">

                <div className="sidebar-search-container">  
                    {searchBarClicked ? <ArrowBackIcon /> : <SearchOutlined />}
                    <input
                        onClick={() => changeSearchBarIcon(current => !current)}
                        placeholder="Search or start new chat"
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                </div>
            </div>

            <div className="sidebar-chats">
                Chats here
            </div>              
       
        </div>
    );
}

export default SideBar;

