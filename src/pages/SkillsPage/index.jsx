import './styles.css'
import Button from '../../components/Button'

const SkillsPage = () => (
    <section id="skills">
        <div id="overlay">
            <h1 className="titulo">Skills</h1>
            <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>APIs REST</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Git</li>
                <li>GitHub</li>
            </ul>
            <Button buttonType="downloadCompleteResume" />
        </div>
    </section>
)

export default SkillsPage