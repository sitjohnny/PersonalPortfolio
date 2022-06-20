import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#5F85DB',
        },
        secondary: {
            main: '#90B8F8',
        },
        background: {
            default: '#1D263B',
        },
    },
    typography: {
        fontFamily: 'Nunito, Roboto',
    },
});

theme = createTheme(theme);

export default theme;
