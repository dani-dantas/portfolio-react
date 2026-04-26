import './styles.css'
import Button from '../../components/Button'

const SkillsPage = () => (
    <section id="skills">
        <div id="overlay">
            <h1 className="titulo">Skills</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ES6+</li>
                <li>React</li>
                <li>Inglês</li>
                <li>Git</li>
                <li>GitHub</li>
            </ul>
            <Button buttonType="downloadCompleteResume" />
        </div>
    </section>
)

export default SkillsPage