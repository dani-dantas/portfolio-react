import './styles.css'
import Button from '../../components/Button'

const AboutPage = () => (
    <section id="sobreMim">
        <div id="sobreMimTextosFlexContainer">
            <div id="sobreMimTextosFlexItem">
                <h1 className="titulo">Sobre mim</h1>
                <p className="lineHeight">Olá! Sou <strong>Daniella Dantas</strong>, estudante de Engenharia de Software e formada em ADS. Comecei minha trajetória no Front-end, com <strong>HTML, CSS, JavaScript e React</strong>, e atualmente estou aprofundando meus conhecimentos em Back-end <strong>Java, Spring Boot, APIs REST e bancos de dados</strong>. Gosto de entender como as coisas funcionam, identificar problemas e transformar ideias em soluções práticas, aprendendo na prática por meio de projetos e desafios. Meu objetivo é construir uma base sólida em desenvolvimento de software e evoluir para atuar como desenvolvedora Full Stack.</p>
                <Button buttonType="linkedin" />
            </div>
        </div>
        <div id="fotoSobreMim" role="img" aria-label="Foto de Daniella Dantas na seção sobre mim"></div>
    </section>
)

export default AboutPage