import { styles } from './css/styles';
import ProfilePic from './profilePicture';
import Box from '@mui/material/Box';

export default function About() {
    return (
        <Box sx={styles.boxContainer}>
            <ProfilePic />
        </Box>
    );
}
