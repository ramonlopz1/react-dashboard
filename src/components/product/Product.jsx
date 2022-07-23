import styles from './Product.module.css'
import Main from '../templates/main/Main'
import Header from '../templates/header/Header'

export default function Product() {

    const renderMainSection = () => {
        return (
            <section className={styles.section__product}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </section>
        )
    }

    return (
        <>
            <Header />
            <Main myclass="main__product">
                {renderMainSection()}
            </Main>
        </>
    )
}