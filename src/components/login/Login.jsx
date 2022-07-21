import './Login.css'
import { Link } from 'react-router-dom'
import Main from '../templates/main/Main'
import WelcomeContainer from './WelcomeContainer'
import Footer from '../templates/footer/Footer'


export default function Login(props) {

    const renderMainSection = () => {

        return (
            <section className='section__login'>
                <WelcomeContainer/>
                <div className="container__auth">
                    <h1>Credenciais</h1>
                    <div className="container__inputs">
                        <div className="input__user">
                            <label htmlFor="user">Usuário</label>
                            <input type="text" name="user" id="user" />
                        </div>
                        <div className="input__pass">
                            <label htmlFor="pass">Senha</label>
                            <input type="password" name="pass" id="pass" />
                        </div>
                    </div>

                    <Link to="/homne">Auth</Link>
                </div>
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