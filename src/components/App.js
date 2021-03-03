import React, { useState } from "react";

import { SelectedSeed } from "../hooks/selectedSeed";

import SideBar from "./SideBar";
import Chat from "./Chat";

import "../styles/App.css";

const App = () => {

    const [currentSeed, setSeed] = SelectedSeed();


    return(
        <div className="app-container">
            <div className="app-left">
                <SideBar  />
            </div>
                        
            <div className="app-right">
                <Chat currentSeed={currentSeed} setSeed={setSeed} />
            </div>
        </div>
    );
}

export default App;




