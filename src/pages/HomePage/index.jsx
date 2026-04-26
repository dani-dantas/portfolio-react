import './styles.css'
import Button from '../../components/Button'

const HomePage = () => (
    <section id="home">
        <div id="foto" role="img" aria-label="Foto de Daniella Dantas na seção inicial"></div>
        <div id="homeConteudo">
            <div id="homeTextos">
                <h1 className="titulo">Daniella Dantas</h1>
                <h2>Desenvolvedora Front-End</h2>
                <Button buttonType="downloadResume" />
            </div>
        </div>
    </section>
)

export default HomePage