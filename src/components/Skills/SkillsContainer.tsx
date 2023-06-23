import React from 'react';
import cl from './skills.module.scss'
import Skill from "./Skill";
import htmlImg from "../../assets/html.jpeg"
import {Title} from "../common/Title/Title";

const skillName1 = 'HTML'
const skillName2 = 'CSS'
const skillName3 = 'REACT'
const skillDescription1 = 'Description'

export const SkillsContainer = () => {
    return (
        <section className={cl.skills}>
            <div className={cl.mainWrapper}>
                <Title tag={'h1'}>Skills</Title>
                <div className={cl.skillsWrapper}>
                    <Skill title={skillName1} img={htmlImg} text={skillDescription1}/>
                    <Skill title={skillName1} img={htmlImg} text={skillDescription1}/>
                    <Skill title={skillName1} img={htmlImg} text={skillDescription1}/>
                </div>
            </div>
        </section>
    );
};

