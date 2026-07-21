import './styles.css'
import github from '../../assets/icones/github.png'

const ProjectsPage = () => (
    <section id="projetos">
        <div id="projetosContainer">
            <h1 className="titulo">Projetos</h1>
            <div id="projetosCards">
                <div className="card">
                    <h2>Tecboard Hub</h2>
                    <p>Hub de eventos de tecnologia com foco em organização, descoberta e acesso rápido a conteúdos relevantes. O projeto destaca domínio de JavaScript, estrutura de interface e pensamento voltado para experiência do usuário.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/tecboardhub" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Jornada Viagens</h2>
                    <p>Landing page responsiva para o segmento de viagens, criada para comunicar ofertas de forma visual, clara e envolvente. Demonstra cuidado com layout, hierarquia de conteúdo e adaptação para diferentes telas.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/jornada-viagens" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Fokus</h2>
                    <p>Aplicação de produtividade baseada na técnica Pomodoro, com checklist para apoiar foco e organização de tarefas. Evidencia criação de interfaces funcionais, estados de interação e uma experiência prática para o dia a dia.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/fokus" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Fanta Site</h2>
                    <p>Projeto web com animações usando GSAP, pensado para criar uma experiência visual mais dinâmica e memorável. Mostra iniciativa em trabalhar com movimento, timing e interfaces que prendem a atenção.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/fanta-site" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Site de Links</h2>
                    <p>Página de links no estilo Linktree e Beacons.ai, desenvolvida para centralizar presença digital com visual limpo e navegação direta. Reforça habilidades em composição, responsividade e criação de páginas objetivas.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/site-de-links" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Tecboard</h2>
                    <p>Projeto front-end desenvolvido durante a formação da Alura, com foco em consolidar fundamentos de HTML, CSS e construção de páginas responsivas. Demonstra evolução técnica, organização visual e boas práticas de base.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/tecboard" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
                <div className="card">
                    <h2>Pesquisa Culturama</h2>
                    <p>Formulário de pesquisa online para a Culturama, desenvolvido para coletar informações de forma simples, organizada e acessível. Valoriza estrutura semântica, clareza nos campos e uma experiência objetiva para o usuário.</p>
                    <a className="button githubBtn" href="https://github.com/dani-dantas/pesquisa-culturama" target="_blank">
                        <img src={github} alt="Ícone do GitHub"/>
                        <span>Ver no GitHub</span></a>
                </div>
            </div>
        </div>
    </section>
)

export default ProjectsPage
