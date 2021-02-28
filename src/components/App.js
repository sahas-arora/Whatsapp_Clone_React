import React, { Component } from "react";

import SideBar from "./SideBar";
import Chat from "./Chat";

import "../styles/App.css";

export default class App extends Component {
    constructor() {
        super();

        this.state = { avatarSource: ''}
        this.setAvatarSource = this.setAvatarSource.bind(this);
    }

    setAvatarSource(src) {
        this.setState({ avatarSource: src})
    }


    render() {
        return(
            <div className="app-container">
                <div className="app-left">
                    <SideBar AvatarSource={this.setAvatarSource} />
                </div>
                
                <div className="app-right">
                    <Chat avatarSource={this.state.avatarSource} />
                </div>
            </div>
        );
    }
}


