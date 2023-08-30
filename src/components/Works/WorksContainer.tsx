import React, {useContext} from 'react';
import cl from 'components/Works/works.module.scss'
import Work from "./Work";
import {Title} from "components/common/Title/Title";
import {ContentType} from "app/Content";
import {MyContext} from "components/MyContextProvider";

const WorksContainer = () => {
    const {works} = useContext<ContentType>(MyContext)

    const renderWorks = works.map((w, i) => {
        return (
            <Work
                key={i}
                title={w.title}
                img={w.img}
                text={w.desc}
                link={w.link}
                tech={w.techs}
            />
        )
    })

    return (
        <section className={cl.works}>
            <div className={cl.mainWrapper}>
                <Title tag={'h1'}>My works</Title>
                <div className={cl.worksWrapper}>
                    {renderWorks}
                </div>
            </div>
        </section>
    );
};
export default WorksContainer;