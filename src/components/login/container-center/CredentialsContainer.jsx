import styles from './CredentialsContainer.module.css'
import { Link } from 'react-router-dom'

export default function CredentialsContainer(props) {
    return (
        <div className={styles.container__auth}>
            <h1>Credenciais</h1>
            <div className={styles.container__inputs}>
                <div className="input__user">
                    <label htmlFor="user">Usuário</label>
                    <input type="text" name="user" id="user" />
                </div>
                <div className="input__pass">
                    <label htmlFor="pass">Senha</label>
                    <input type="password" name="pass" id="pass" />
                </div>
            </div>

            <Link to="/home">Auth</Link>
        </div>
    )
}