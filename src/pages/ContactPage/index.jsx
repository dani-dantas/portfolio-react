import './styles.css'
import gmail from '../../assets/icones/gmail.png'
import whatsapp from '../../assets/icones/whatsapp.png'
import linkedin from '../../assets/icones/linkedin.png'
import github from '../../assets/icones/github.png'
import instagram from '../../assets/icones/instagram.png'

const ContactPage = () => (
    <section id="contato">
        <div id="contatoTextos">
            <div id="contatoTextosChild">
                <h1 className="titulo">Contato</h1>
                <p className="lineHeight">Gostaria de bater um papo comigo? Vou deixar todas as minhas formas de contato e redes sociais listadas abaixo.</p>
                <address id="emailWhatsapp">
                    <div className="contatoItem">
                        <img src={gmail} alt="Ícone do Gmail"/>
                        <p>danielladantasdev@gmail.com</p>
                    </div>
                    <div className="contatoItem">
                        <img src={whatsapp} alt="Ícone do Whatsapp"/>
                        <p>+55 (83) 98162-1281</p>
                    </div>
                </address>
                <div id="redesSociais">
                    <a href="https://www.linkedin.com/in/daniella-dantas/" target="_blank" aria-label="Perfil de Daniella no LinkedIn">
                        <img src={linkedin} alt=""/>
                    </a>
                    <a href="https://github.com/dani-dantas" target="_blank" aria-label="Perfil de Daniella no GitHub">
                        <img src={github} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/danidantx/" target="_blank" aria-label="Perfil de Daniella no Instagram">
                        <img src={instagram} alt=""/>
                    </a>
                </div>
            </div>
        </div>
        <div id="fotoContato" role="img" aria-label="Foto de Daniella Dantas na seção de contato"></div>
    </section>
)

export default ContactPage