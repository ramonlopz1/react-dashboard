import './Login.css'
import { Link } from 'react-router-dom'
import Main from '../templates/main/Main'
export default function Login(props) {

    if (!props.HeaderON) {
        document.querySelector('header.header')
            .style.display = 'none'
    }

    const renderMainSection = () => {
        return (
            <section className='section__login'>
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

                    <Link to="/auth">Auth</Link>
                </div>
            </section>
        )
    }

    return (
        <Main className='main__login'>
            {renderMainSection()}
        </Main>
    )
}