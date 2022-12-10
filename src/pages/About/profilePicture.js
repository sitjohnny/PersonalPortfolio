/* eslint-disable jsx-a11y/anchor-is-valid */
import './css/styles.css';
import profilePic from '../../static/pfp.jpg';
import { motion } from 'framer-motion';

export default function ProfilePic() {
    return (
        <motion.div initial="hidden" viewport={{ once: true }}>
            <motion.div
                className="polaroid"
                whileInView={{
                    opacity: 1,
                    delay: 1,
                }}
            >
                <a>
                    <img src={profilePic} alt="Johnny Profile Pic" />
                </a>
            </motion.div>
        </motion.div>
    );
}
