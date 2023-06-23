import React, {FC} from 'react';
import cl from './title.module.scss'

type TitlePropsType = {
    tag: 'h1' | 'h2'
    children: string
}

export const Title: FC<TitlePropsType> = (props) => {

    if (props.tag === 'h1') {
        return (
            <h1 className={cl.h1Title}>
                {props.children}
            </h1>
        );
    } else {
        return (
            <h2 className={cl.h2Title}>
                {props.children}
            </h2>
        );
    }
};

