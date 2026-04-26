import './styles.css'
import coffeeIcon from '../../assets/logo.svg'

const Navbar = () => (
    <nav>
        <img src={coffeeIcon} id="logo" alt="Logotipo do portfólio de Daniella Dantas"/>
        <ul id="navLinks">
            <li><a href="#sobreMim">Sobre mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
)

export default Navbar