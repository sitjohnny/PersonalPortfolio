import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { navItems } from '../../../constants/navItems';

/**
 * Navbar component using MUI's AppBar
 */
export default function Navbar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ bgcolor: '#1D263B' }} elevation={0}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                            {`<johnny.sit />`}
                        </Link>
                    </Typography>
                    <Box justifyContent="space-between">
                        {navItems.map((item) => (
                            <Button
                                key={item.title}
                                component={NavLink}
                                to={item.link}
                                sx={{
                                    color: '#fff',
                                    typography: 'h6',
                                    mr: 3,
                                }}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
