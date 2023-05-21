import React from 'react';
import cl from './works.module.css'
import workPic1 from '../../assets/keksobooking.png'
import Work from "./Work";

const workName1 = 'Keksobooking'
const workDesc1 = 'Сервис объявлений о сдаче жилья'
const workLink1 = 'https://anatoliypologovoy.github.io/keksobooking/'

const WorksContainer = () => {
    return (
        <section className={cl.works}>
            <div className={cl.mainWrapper}>
                <h1>Мои работы</h1>
                <div className={cl.worksWrapper}>
                    <Work title={workName1} img={workPic1} text={workDesc1} link={workLink1}/>
                    <Work title={workName1} img={workPic1} text={workDesc1} link={workLink1}/>
                </div>
            </div>
        </section>
    );
};

export default WorksContainer;