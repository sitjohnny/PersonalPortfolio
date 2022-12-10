import './styles/styles.css';
import Navbar from './shared/Navbar/components';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div>
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <motion.div className="progress-bar" style={{ scaleX }} />
        </motion.div>
    );
}

export default App;
