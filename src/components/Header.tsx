import React from 'react';
import cl from './header.module.css'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerWrapper}>
                <nav className={cl.nav}>
                    <a href="#">Главная</a>
                    <a href="#">Скиллы</a>
                    <a href="#">Работы</a>
                    <a href="#">Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;