import Navbar from './shared/Navbar/components';
import { navItems } from './constants/navItems';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <>
            <Navbar navItems={navItems} />
        </>
    );
}

export default App;
