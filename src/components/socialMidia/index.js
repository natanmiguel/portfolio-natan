import  {FaLinkedin, FaGithub, FaInstagram, FaUserGraduate} from 'react-icons/fa';
import  { Link } from 'react-router-dom';
import './socialMedia.css';

function socialMedia() {
    return (
        <div className="social-media">
            <a href='https://www.linkedin.com/in/natanmigueln1/'><FaLinkedin className='icons linkedin'/></a>
            <a href='https://github.com/natanmiguel'><FaGithub className='icons github'/></a>
            <a href='https://www.instagram.com/n1_natan/'><FaInstagram className='icons instagram' /></a>
            
            <Link to='/curriculo' target='_blank' className='linkto'><FaUserGraduate className='icons curriculo' title='Curriculum' /></Link>
           
            
        </div>
    );
};

export default socialMedia;