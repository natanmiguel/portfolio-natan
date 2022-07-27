import './projetos.css';
import React from 'react';
import CarouselProjects from '../../components/CarouselProjects';

function Projetos() {
    
    return (
        <div className='projetos'> 
            <div className='projetosTitulo'>
                <h1>Projetos</h1>
            </div>
            <div className='meusProjetos'>
                <CarouselProjects className='carouselContainer' />
            </div>
        </div>
    );
};


export default Projetos;