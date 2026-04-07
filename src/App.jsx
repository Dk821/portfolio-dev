import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="bg-primary min-h-screen text-text-primary overflow-x-hidden font-sans noise-overlay">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
