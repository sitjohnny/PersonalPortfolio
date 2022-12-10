import { styles } from './css/styles';
import ProfilePic from './profilePicture';
import Box from '@mui/material/Box';
import { motion, useScroll } from 'framer-motion';

export default function About() {
    const { scrollYProgress } = useScroll();

    return (
        <Box sx={styles.boxContainer}>
            <motion.div style={{ scaleX: scrollYProgress }}>
                <ProfilePic />
            </motion.div>
        </Box>
    );
}
