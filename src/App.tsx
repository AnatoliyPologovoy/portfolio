import React from 'react';
import './App.css';
import Header from "./components/Header";
import Promo from "./components/Promo";
import {SkillsContainer} from "./components/skills/SkillsContainer";
import WorksContainer from "./components/Works/WorksContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <SkillsContainer/>
            <WorksContainer/>
        </div>
    );
}

export default App;
