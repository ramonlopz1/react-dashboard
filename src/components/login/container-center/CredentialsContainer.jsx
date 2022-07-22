import styles from './CredentialsContainer.module.css'

export default function CredentialsContainer(props) {
    return (
        <div className={styles.container__auth}>
            <h1>Credenciais</h1>
            <span>Insira suas credenciais para acessar a sua conta</span>
            <form className={styles.container__inputs}>
                <i className='fa fa-unlock' style={{fontSize: '40px'}}></i>
                <div className={styles.input__user}>
                    <label htmlFor="user">
                        <i className='fa fa-user' ></i>
                    </label>
                    <input 
                        required
                        type="email" 
                        name="user" 
                        id="user" 
                        placeholder='Insira o seu usuário.' />
                </div>
                <div className={styles.input__pass}>
                    <label htmlFor="pass">
                        <i className='fa fa-key'></i>
                    </label>
                    <input 
                        required
                        type="password" 
                        name="pass" 
                        id="pass" 
                        placeholder='Insira a sua senha.' />
                </div>
                <span className={styles.forgetpass}>Esqueceu a senha?</span>
                <button to="/" className={styles.btn}>Login</button>
            </form>

        </div>
    )
}