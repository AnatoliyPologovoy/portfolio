import React, {FC} from 'react';
import cl from './skills.module.css'

export type SkillPropsType = {
    title: string
    img: string
    text: string
}

const Skill: FC<SkillPropsType> = (props) => {
    return (
        <div className={cl.skillWrapper}>
            <img src={props.img} alt="#" className={cl.pic}/>
            <h2 className={cl.title}>{props.title}</h2>
            <p className={cl.text}>{props.text}</p>
        </div>
    );
};

export default Skill;