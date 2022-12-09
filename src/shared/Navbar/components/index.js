import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from '../../../config/config.js';

function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        target: window,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

/**
 * Navbar component using MUI's AppBar
 */
export default function Navbar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <HideOnScroll>
                <AppBar component="nav" sx={{ bgcolor: '#1D263B' }} elevation={0} position="fixed">
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            {`<johnny.sit />`}
                        </Typography>
                        <Box justifyContent="space-between">
                            {navItems.map((item) => (
                                <Button
                                    key={item.title}
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
            </HideOnScroll>
        </Box>
    );
}
