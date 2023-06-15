import React from 'react';
import cl from './promo.module.scss'
import photo from '../../assets/myPhoto.jpg'

const Promo = () => {
    return (
        <section className={cl.promo}>
            <div className={cl.promoWrapper}>
                <div className={cl.title}>
                    Hello I'm
                    <h1 className={cl.name}> Anatoliy Pologovoy</h1>
                    Front-end developer
                </div>
                <img src={photo}
                     alt="Портрет молодого мужчины, светлая кожа, темные волосы, серые глаза"
                     className={cl.photo}/>
            </div>
        </section>
    );
};

export default Promo;