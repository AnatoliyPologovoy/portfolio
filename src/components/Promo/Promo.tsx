import React from 'react';
import cl from './promo.module.css'
import photo from '../../assets/myPhoto.jpg'
import {Title} from "../common/Title/Title";

const Promo = () => {
    return (
        <section className={cl.promo}>
            <div className={cl.promoWrapper}>
                <Title>
                    Привет!
                    Меня зовут Анатолий Пологовой.
                    Я front-end разработчик.
                </Title>
                <img src={photo}
                     alt="Портрет молодого мужчины, светлая кожа, темные волосы, серые глаза"
                     className={cl.photo}/>
            </div>
        </section>
    );
};

export default Promo;