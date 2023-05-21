import React from 'react';
import cl from './skills.module.css'
import Skill from "./Skill";
import htmlImg from "../../assets/html.jpeg"

const skillName1 = 'HTML'
const skillName2 = 'CSS'
const skillName3 = 'REACT'
const skillDescription1 = 'Описание навыка'

export const SkillsContainer = () => {
    return (
        <section className={cl.skills}>
            <div className={cl.mainWrapper}>
                <h1 className={cl.mainTitle}>Мои скиллы</h1>
                <div className={cl.skillsWrapper}>
                    <Skill title={skillName1} img={htmlImg} text={skillDescription1}/>
                    <Skill title={skillName1} img={htmlImg} text={skillDescription1}/>
                    <Skill title={skillName1} img={htmlImg} text={skillDescription1}/>
                </div>
            </div>
        </section>
    );
};

