import './App.css';
import  {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import TypeAnimation from 'react-type-animation';
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
          <code>
            <TypeAnimation
              cursor={true}
              sequence={['Front-end Developer.', 2000]}
              wrapper="code"
              repeat={1}
            />
          </code>
         
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
