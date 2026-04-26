import './styles.css'
import Button from '../../components/Button'

const AboutPage = () => (
    <section id="sobreMim">
        <div id="sobreMimTextosFlexContainer">
            <div id="sobreMimTextosFlexItem">
                <h1 className="titulo">Sobre mim</h1>
                <p className="lineHeight">Olá! Sou <strong>Daniella Dantas</strong>, estudante de Engenharia de Software e desenvolvedora Frontend apaixonada por criar interfaces modernas, responsivas e intuitivas com <strong>HTML, CSS, JavaScript e React</strong>. Gosto de transformar ideias em experiências digitais funcionais, unindo design, performance e boa experiência do usuário, sempre com atenção aos detalhes visuais, organização do código e boas práticas de desenvolvimento. Estou em constante evolução, aprofundando meus estudos em frontend moderno, acessibilidade, componentização e performance web, enquanto construo projetos práticos que fortalecem meu portfólio e minha jornada como futura engenheira de software.</p>
                <Button buttonType="linkedin" />
            </div>
        </div>
        <div id="fotoSobreMim" role="img" aria-label="Foto de Daniella Dantas na seção sobre mim"></div>
    </section>
)

export default AboutPage