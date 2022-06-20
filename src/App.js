import { ThemeProvider } from '@mui/material';
import Navbar from './shared/components/Navbar/components';
import Button from '@mui/material/Button';
import theme from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <br />
                <Button>Hello World</Button>;
            </ThemeProvider>
        </>
    );
}

export default App;
