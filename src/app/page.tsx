import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
export default HomePage