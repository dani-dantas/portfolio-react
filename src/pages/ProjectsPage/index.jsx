import './styles.css'
import github from '../../assets/icones/github.png'

const ProjectsPage = () => (
    <section id="projetos">
        <div id="projetosContainer">
            <h1 className="titulo">Projetos</h1>
            <div id="projetosCards">
                <div className="card">
                    <h2>Jornada Viagens</h2>
                    <p>Plataforma web responsiva desenvolvida com HTML5, CSS3 e JavaScript, aplicando conceitos de mobile-first, Flexbox e organização semântica. O projeto simula um produto real de turismo, com foco em UX, performance e navegação intuitiva, evidenciando capacidade de estruturar interfaces escaláveis e bem organizadas.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/jornada-viagens" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Fokus</h2>
                    <p>Aplicação completa de produtividade construída com JavaScript puro (ES6+), HTML e CSS, integrando manipulação avançada do DOM, eventos e LocalStorage para persistência de dados. O projeto demonstra domínio em lógica de aplicação, gerenciamento de estado e experiência do usuário, além de uma arquitetura limpa e funcional.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/fokus" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Fanta Site</h2>
                    <p>Landing page interativa desenvolvida com HTML, CSS (animações, transitions) e JavaScript, com foco em UI moderna e microinterações. O projeto evidencia habilidades em CSS avançado, design visual e criação de experiências imersivas, alinhadas a padrões atuais de front-end.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/fanta-site" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Site de Links</h2>
                    <p>Aplicação responsiva construída com HTML5, CSS3 e JavaScript, inspirada em soluções como Linktree. Destaca o uso de layout flexível, design centrado no usuário e organização visual, com foco em performance e usabilidade mobile.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/site-de-links" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Tecboard</h2>
                    <p>Landing page de produto SaaS desenvolvida com HTML, CSS e JavaScript, com foco em hierarquia visual, apresentação de valor e conversão. O projeto demonstra habilidade em criar interfaces voltadas para produtos digitais reais, com estrutura clara e estratégica.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/tecboard" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Pesquisa Culturama</h2>
                    <p>Formulário completo desenvolvido com HTML semântico e CSS, aplicando validações nativas, acessibilidade (ARIA) e boas práticas de UX. O projeto evidencia atenção à qualidade de dados, usabilidade e inclusão digital, aspectos essenciais em aplicações modernas.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/tecboard" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
            </div>
        </div>
    </section>
)

export default ProjectsPage