import React from 'react';
import styles from './Home.module.css'
import Main from '../templates/main/Main'
import Header from '../templates/header/Header';
import FirstBox from './box-components/first-box/FirstBox';
import SecondBox from './box-components/second-box/SecondBox';
import ThirdBox from './box-components/third-box/ThirdBox';
import FourthBox from './box-components/fourth-box/FourthBox';

export default function Home(props) {

    const renderMainSection = () => {
        return (
            <section className={styles.section__home}>
                <div className={styles.box}>
                    <FirstBox/>
                </div>
                <div className={styles.box}>
                    <SecondBox/>
                </div>
                <div className={styles.box}>
                    <ThirdBox/>
                </div>
                <div className={styles.box}>
                    <FourthBox/>
                </div>
            </section>
        )
    }

    return (
        <>
            <Header />
            <Main myclass="main__home">
                {renderMainSection()}
            </Main>
        </>
    )
}




