import Awards from "./Components/Awards/Awards"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import ProjectOne from "./Components/ProjectOne/ProjectOne"
import ProjectTwo from "./Components/ProjectTwo/ProjectTwo"
import Skills from "./Components/Skills/Skills"

function App() {

  return (
    <div className="container mx-auto">
      <Hero/>
      <Skills />
      <ProjectOne />
      <ProjectTwo />
      <Awards />
      <Footer />
    </div>
  )
}

export default App