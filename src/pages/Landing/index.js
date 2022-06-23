import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypeWriterEffect from 'react-typewriter-effect';
import { styles } from './css/styles';

export default function Landing() {
    return (
        <Box sx={styles.boxContainer}>
            <Typography variant="h3" fontStyle="italic" sx={{ display: 'inline' }}>
                Hey, I'm
            </Typography>
            <Typography variant="h1" sx={{ display: 'inline' }}>
                Johnny Sit
            </Typography>
            <TypeWriterEffect
                startDelay={2000}
                cursorColor="#353941"
                multiText={['Software Developer']}
                typeSpeed={50}
            />
        </Box>
    );
}
