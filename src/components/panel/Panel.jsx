import styles from './Panel.module.css'
import Main from '../templates/main/Main'
import Header from '../templates/header/Header'
import Footer from '../templates/footer/Footer'
import Add from './add/Add'
import Table from './table/Table'

export default function Panel(props) {


    const renderMainSection = () => {

        return (
            <section className={styles.section__panel}>
                <div className={styles.container}>
                    <Add icon="home" label="Faturamento" />
                    <Add icon="home" label="Devolução" />
                    <Add icon="home" label="Positivação" />
                    <Add icon="home" label="Mix" />
                    <Add icon="home" label="Pedido" />
                    <Add icon="home" label="Cliente" />
                    <Add icon="home" label="Cidade" />
                    <Add icon="home" label="Produto" />
                    
                </div>
                <div className={styles.container}>
                   <Table/>
                </div>
            </section>
        )
    }

    return (
        <>
            <Header />
            <Main myclass={styles.main__panel}>
                {renderMainSection()}
            </Main>
            <Footer />
        </>
    )
}