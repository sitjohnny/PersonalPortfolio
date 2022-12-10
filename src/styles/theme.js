import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#5F85DB',
        },
        secondary: {
            main: '#FFADD8',
        },
        background: {
            default: '#1D263B',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Nunito, Roboto',
    },
});

theme = createTheme(theme);

export default theme;
