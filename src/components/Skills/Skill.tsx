import React, {FC} from 'react';
import cl from './skills.module.scss'
import {Title} from "../common/Title/Title";

export type SkillPropsType = {
    title: string
    img: string
    // text?: string
}

const Skill: FC<SkillPropsType> = (props) => {
    return (
        <div className={cl.skillWrapper}>
            <img src={props.img} alt="#" className={cl.pic}/>
            <Title tag={'h2'}>{props.title}</Title>
            {/*<p className={cl.text}>{props.text}</p>*/}
        </div>
    );
};

export default Skill;