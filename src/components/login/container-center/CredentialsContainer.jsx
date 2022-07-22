import styles from './CredentialsContainer.module.css'
import { Link } from 'react-router-dom'

export default function CredentialsContainer(props) {
    return (
        <div className={styles.container__auth}>
            <h1>Credenciais</h1>
            <span>Insira suas credenciais para acessar a sua conta</span>
            <div className={styles.container__inputs}>
                <div className={styles.input__user}>
                    <label htmlFor="user">
                        <i className='fa fa-user'></i>
                    </label>
                    <input type="text" name="user" id="user" placeholder='Insira o seu usuário.' />
                </div>
                <div className={styles.input__pass}>
                    <label htmlFor="pass">
                        <i className='fa fa-key'></i>
                    </label>
                    <input type="password" name="pass" id="pass" placeholder='Insira a sua senha.' />
                </div>
                <span className={styles.forgetpass}>Esqueceu a senha?</span>
                <Link to="/" className={styles.btn}>Login</Link>
            </div>

        </div>
    )
}