import React from 'react';
import cl from './contacts.module.css'

const Contacts = () => {
    return (
        <section className={cl.contacts}>
            <div className={cl.mainWrapper}>
                <h1 className={cl.title}>Задать вопрос</h1>
                <form action="#" className={cl.form}>
                    <input type={"text"} className={cl.formName}/>
                    <input type={"text"} className={cl.formEmail}/>
                    <textarea className={cl.textarea} rows={8}/>
                    <button type={"submit"} className={cl.submit}>
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;