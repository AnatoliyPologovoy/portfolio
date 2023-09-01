import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import {SkillsContainer} from "components/Skills/SkillsContainer";
import WorksContainer from "./components/Works/WorksContainer";
import Hire from "./components/Hire/Hire";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {MyProvider} from "components/MyContextProvider";
import {content} from "app/content";

function App() {
		return (
				<MyProvider value={content}>
						<div className="App">
								<Header/>
								<Promo/>
								<SkillsContainer/>
								<WorksContainer/>
								<Hire/>
								<Contacts/>
								<Footer/>
						</div>
				</MyProvider>
		);
}

export default App;
