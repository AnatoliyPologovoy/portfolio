import React, {FC} from 'react';
import cl from 'components/Works/works.module.scss'
import {Title} from "components/common/Title/Title";

export type WorkPropsType = {
    title: string
    img: string
    text: string
    link: string
    tech: string[]
}

const Work: FC<WorkPropsType> = (props) => {
    const renderTechs = props.tech.map(t => {
        return (
            <div className={cl.tech}>{t}</div>
        )
    })

    return (
        <div className={cl.workWrapper}>
            <a className={cl.picWrapper} href={props.link} target={'_blank'}>
                <img src={props.img} alt="#" className={cl.pic}/>
            </a>
            <Title tag={'h2'}>{props.title}</Title>
            <p className={cl.text}>{props.text}</p>
            <div className={cl.techWrapper}>
                {renderTechs}
            </div>

        </div>
    );
};

export default Work;

