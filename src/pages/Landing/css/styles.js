import { minHeight } from '@mui/system';
import { clamp } from 'framer-motion';

export const styles = {
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        width: clamp('50%', '700px', '90%'),
        height: minHeight('50%', '300px'),
    },
};
