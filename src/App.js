import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './components/homeCard/index';


function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  return (
    root.render(
      <React.StrictMode>
        <Home />
        
      </React.StrictMode>
    )
  );
};

reportWebVitals();

export default App;