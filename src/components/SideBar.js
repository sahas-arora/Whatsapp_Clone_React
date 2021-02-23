import React from "react";

import "../styles/SideBar.css";

const SideBar = () => {
    return(
        <div className="sidebar-container">
        
            <div className="sidebar-header">
                <div className="sidebar-profile">
                    Profile photo here
                </div>
                <div className="sidebar-links">
                Status, Chat, Ops
                </div>

            </div>
            
            <div className="sidebar-search">
                Search Bar here
            </div>

            <div className="sidebar-chats">
                Chats here
            </div>              
       
        </div>
    );
}

export default SideBar;

