import styles from './WelcomeContainer.module.css'
import img from '../../../assets/imgs/login__welcome/welcome_image.png'
export default function WelcomeContainer() {

    return (
        <div className={styles.container_welcome}>
            <h1>Olá!</h1>
            <img src={img} alt="welcome" className={styles.img_welcome}/>
            <p>Seja bem vindo, aqui você tem em mãos uma ferramenta que vai te proporcionar uma melhor análise, tomada de decisão e ciência dos dados da sua empresa.</p>

            <ul>
                <li>Analytics</li>
                <li>RCA's</li>
                <li>Clientes</li>
                <li>Financeiro</li>
                <li>Produtos</li>
            </ul>

            <p>Em breve novas funcionalidades estarão disponíveis.</p>
            
        </div>
    )
}