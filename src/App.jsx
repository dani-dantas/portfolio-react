import AboutPage from "./pages/AboutMePage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"

const App = () => {

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
      </main>
      <footer>
        <ContactPage />
      </footer>
    </div>
  )
}

export default App
