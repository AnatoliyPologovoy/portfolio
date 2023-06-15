import React, {FC} from 'react';
import cl from './title.module.scss'


export const Title:FC<{children: string }> = (props) => {
    return (
        <h1 className={cl.title}>
            {props.children}
        </h1>
    );
};

