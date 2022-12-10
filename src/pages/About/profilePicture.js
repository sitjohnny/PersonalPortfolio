/* eslint-disable jsx-a11y/anchor-is-valid */
import './css/styles.css';
import profilePic from '../../static/pfp.jpg';

export default function ProfilePic() {
    return (
        <div className="polaroid">
            <a>
                <img src={profilePic} alt="Johnny Profile Pic" />
            </a>
        </div>
    );
}
