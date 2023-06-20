import React from 'react';
import cl from './header.module.scss'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerWrapper}>
                <nav className={cl.nav}>
                    <a href="src/components/Header/Header#">Home</a>
                    <a href="src/components/Header/Header#">Skills</a>
                    <a href="src/components/Header/Header#">Works</a>
                    <a href="src/components/Header/Header#">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;