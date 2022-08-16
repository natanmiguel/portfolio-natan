import React from 'react';
import './homeCard.css';
import SocialMedia from '../../components/socialMidia';
import TypeAnimation from 'react-type-animation';
import mainProfile from './imageperfil.jpg';
import Projetos from '../projetos';
import Habilidades from '../habilidades';




function Home() {
  

  return (
    <div className="Home">
      <header className="Home-header">
        <div className='image-perfil'>
          <img src={mainProfile} alt={"Profile"}/>
        </div>
        <div>
          <h1>
            Natan Miguel
          </h1>
          <code>
            <TypeAnimation
              cursor={true}
              sequence={['Front-end Developer.', 2000]}
              wrapper="code"
              repeat={1}
            />
          </code>
         
        </div>
        <SocialMedia/>
        
      </header>
      <Habilidades/>
      <Projetos/>
      
    
    </div>
  );
};



export default Home;
