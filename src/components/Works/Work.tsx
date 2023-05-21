import React, {FC} from 'react';
import cl from './works.module.css'

export type WorkPropsType = {
    title: string
    img: string
    text: string
    link: string
}

const Work: FC<WorkPropsType> = (props) => {

    return (
        <div className={cl.workWrapper}>
            <a className={cl.picWrapper} href={props.link} target={'_blank'}>
                <img src={props.img} alt="#" className={cl.pic}/>
            </a>
            <h2 className={cl.title}>{props.title}</h2>
            <p className={cl.text}>{props.text}</p>
        </div>
    );
};

export default Work;