import React from 'react';
import './App.css';
import Header from "./components/Header";
import Promo from "./components/Promo";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <Skills/>
        </div>
    );
}

export default App;
