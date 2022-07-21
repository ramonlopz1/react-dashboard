import './Login.css'
import Main from '../templates/main/Main'
import WelcomeContainer from './container-center/WelcomeContainer'
import CredentialsContainer from './container-center/CredentialsContainer'
import Footer from '../templates/footer/Footer'


export default function Login(props) {

    const renderMainSection = () => {

        return (
            <section className='section__login'>
                <WelcomeContainer/>
                <CredentialsContainer/>
            </section>
        )
    }

    return (
        <>
            <Main myclass="main__login">
                {renderMainSection()}
            </Main>
            <Footer />
        </>
    )
}