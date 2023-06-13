import React from 'react';
import cl from './footer.module.css'

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.mainWrapper}>
                <h2 className={cl.title}>Анатолий Пологовой</h2>
                <div className={cl.social}>
                    <div className={cl.socialItem}></div>
                    <div className={cl.socialItem}></div>
                    <div className={cl.socialItem}></div>
                    <div className={cl.socialItem}></div>
                </div>
                <p className={cl.copyright}>
                    @2023 Все права защищены
                </p>
            </div>
        </footer>
    );
};

export default Footer;