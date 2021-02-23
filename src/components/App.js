import React, { Component } from "react";

import SideBar from "./SideBar";

import "../styles/App.css";

export default class App extends Component {

    render() {
        return(
            <div className="app-container">
            <div className="app-left">
                <SideBar />
            </div>
                
            <div className="app-right">
                Chats here!
            </div>
            </div>
        );
    }
}


