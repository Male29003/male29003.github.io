import MainLayout from './layouts/MainLayout'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Skills from './sections/Skills'

function App() {

  return (
    <MainLayout>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  )
}

export default App
