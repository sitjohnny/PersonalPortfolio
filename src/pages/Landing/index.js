import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypeWriterEffect from 'react-typewriter-effect';
import { styles } from './css/styles';
import { motion } from 'framer-motion';

export default function Landing() {
    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 2, delay: 1 }}
        >
            <Box sx={styles.boxContainer}>
                <Typography variant="h3" sx={{ display: 'inline' }}>
                    Hey, I'm
                </Typography>

                <motion.div
                    animate={{ opacity: [0, 1] }}
                    exit={{ opacity: [1, 0] }}
                    transition={{ duration: 2, delay: 2 }}
                >
                    <Typography variant="h1" sx={{ display: 'inline' }}>
                        Johnny Sit
                    </Typography>
                </motion.div>
                <div>
                    <TypeWriterEffect
                        startDelay={4000}
                        cursorColor="#353941"
                        multiText={[
                            'Frontend Developer',
                            'Backend Developer',
                            'Conversational AI Engineer',
                        ]}
                        multiTextLoop={true}
                        typeSpeed={50}
                    />
                </div>
            </Box>
        </motion.div>
    );
}
