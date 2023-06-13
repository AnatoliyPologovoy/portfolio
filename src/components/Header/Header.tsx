import React from 'react';
import cl from './header.module.css'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerWrapper}>
                <nav className={cl.nav}>
                    <a href="src/components/Header/Header#">Главная</a>
                    <a href="src/components/Header/Header#">Скиллы</a>
                    <a href="src/components/Header/Header#">Работы</a>
                    <a href="src/components/Header/Header#">Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;