import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </>
);
