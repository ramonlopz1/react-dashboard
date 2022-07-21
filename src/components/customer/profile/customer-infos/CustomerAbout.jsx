import './CustomerAbout.css'
import ContactInfos from './ContactInfos'

export default function CustomerAbout(props) {
    
    const customer = props.customer

    return (
        <div className="container">
            <div className="top__infos">
                <div className="profilepic">

                </div>
                <h1>{customer?.name} </h1>
            </div>
            <div className="bottom__infos">

                <h3>Informações de contato</h3>
                <ContactInfos title="Email" value="jose@123.com.br" />
                <ContactInfos title="Telefone" value="87 9 9823-9392" />
                <ContactInfos title="Cidade" value="Manari" />
                <ContactInfos title="Endereço" value="Rua de Tal, Nº 1234, Centro" />
                <ContactInfos title="Rca" value="Elias" />
            </div>
        </div>
    )
}