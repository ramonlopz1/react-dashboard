import styles from './Panel.module.css'
import Main from '../templates/main/Main'
import Header from '../templates/header/Header'
import Footer from '../templates/footer/Footer'
import Add from './add/Add'

export default function Panel(props) {


    const renderMainSection = () => {

        return (
            <section className={styles.section__panel}>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
                <Add icon="home" label="Faturamento"/>
            </section>
        )
    }

    return (
        <>
        <Header/>
            <Main myclass={styles.main__panel}>
                {renderMainSection()}
            </Main>
            <Footer />
        </>
    )
}