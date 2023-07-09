import React, {useContext} from 'react';
import cl from './skills.module.scss'
import Skill from "./Skill";
import {Title} from "../common/Title/Title";
import {MyContext} from "components/MyContextProvider";


export const SkillsContainer = () => {
    const {skills} = useContext(MyContext)

    const renderSkills = skills.map((s, i) => {
        return (
            <Skill title={s.title} img={s.img} key={i} />
        )
    })

    return (
        <section className={cl.skills}>
            <div className={cl.mainWrapper}>
                <Title tag={'h1'}>Skills</Title>
                <div className={cl.skillsWrapper}>
                    {renderSkills}
                </div>
            </div>
        </section>
    );
};

