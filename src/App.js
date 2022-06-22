import { Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar/components';
import { navItems } from './constants/navItems';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <>
            <Navbar navItems={navItems} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="projects" />
                <Route exact path="contact" />
            </Routes>
        </>
    );
}

export default App;
