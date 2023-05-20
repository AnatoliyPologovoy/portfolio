import React from 'react';
import cl from './promo.module.css'
import photo from '../assets/myPhoto.jpg'

const Promo = () => {
    return (
        <section className={cl.promo}>
            <div className={cl.promoWrapper}>
                <div className={cl.text}>
                    Привет! <br/>
                    Меня зовут Анатолий Пологовой.<br/>
                    Я front-end разработчик
                </div>
                <img src={photo}
                     alt="Портрет молодого мужчины, светлая кожа, темные волосы, серые глаза"
                     className={cl.photo}/>
            </div>
        </section>
    );
};

export default Promo;