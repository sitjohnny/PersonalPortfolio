import Navbar from './shared/Navbar/components';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
