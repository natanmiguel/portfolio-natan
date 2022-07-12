import './App.css';
import  {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import mainProfile from './imageperfil.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='image-perfil'>
          <img src={mainProfile} alt={"Profile"}/>
        </div>
        <div>
          <p>
            Natan Miguel
          </p>
          <p> 
            <code>Front-end Developer</code> 
          </p>
        </div>
        <div className="social-media">
          <a href='https://www.linkedin.com/in/natan-miguel-948b82230/'><FaLinkedin className='icons linkedin'/></a>
          <a href='https://github.com/natanmiguel'><FaGithub className='icons github'/></a>
          <a href='https://www.instagram.com/n1_natan/'><FaInstagram className='icons instagram' /></a>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
