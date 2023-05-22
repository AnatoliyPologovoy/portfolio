import React from 'react';
import cl from './hire.module.css'

const Hire = () => {

    return (
        <section className={cl.hire}>
            <div className={cl.mainWrapper}>
                <h1 className={cl.title}>
                    Для работы в офисе готов на релокацию в города:<br/>
                    Ростов-на-Дону, Воронеж, Краснодар, Москва
                </h1>
                <a href="#" className={cl.button}>Нанять меня</a>
            </div>
        </section>
    );
};

export default Hire;