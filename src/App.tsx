import React from 'react';
import './App.css';
import Header from "./components/Header";
import Promo from "./components/Promo";
import {SkillsContainer} from "./components/skills/SkillsContainer";
import WorksContainer from "./components/Works/WorksContainer";
import Hire from "./components/Hire";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <SkillsContainer/>
            <WorksContainer/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
