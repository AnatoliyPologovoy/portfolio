import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import {SkillsContainer} from "./components/Skills/SkillsContainer";
import WorksContainer from "./components/Works/WorksContainer";
import Hire from "./components/Hire/Hire";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

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
