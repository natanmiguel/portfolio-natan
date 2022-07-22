import  {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

import './socialMedia.css';

function socialMedia() {
    return (
        <div className="social-media">
            <a href='https://www.linkedin.com/in/natan-miguel-948b82230/'><FaLinkedin className='icons linkedin'/></a>
            <a href='https://github.com/natanmiguel'><FaGithub className='icons github'/></a>
            <a href='https://www.instagram.com/n1_natan/'><FaInstagram className='icons instagram' /></a>
            <a href='/curriculo' target='_blank'>Teste</a>
          
        </div>
    );
};

export default socialMedia;