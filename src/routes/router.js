import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/homeCard';
import Curriculo from '../pages/curriculo';


class RotasApp extends Component {
    render() {
        const home = '/portfolio-natan';
        const curriculo = '/portfolio-natan/curriculo';

	    return (
        
            <Routes>
                <Route exact path={home} element={<Home />} />
                
                <Route exact path= {curriculo} element={<Curriculo/> } />
                <Route path="*" element={<> não encontrada 404</>} />
              
            </Routes>

        
        );
    };
};

export default RotasApp;





          