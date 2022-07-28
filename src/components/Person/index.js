import React from "react";

class AboutMe extends React.Component {
    render(){
       const person = {firstName: 'Natan', 
        lastName: 'Miguel', 
        age: 30, 
        graduation: 'Bachelor of Computer Information Systems, Information Technology',
        ocupation: 'Junior Front-end Developer'
        };
        const knowledges = {languages: ['Português - Nativo', 'English - intermediary', 'Español - buen entendimiento'], 
        skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs'], 
        };

        return  (

            <div className='person'>
                <h1>Olá meu nome é {person.firstName} {person.lastName}, tenho {person.age} anos.</h1>
                    
                <h2>Sou formado em {person.graduation}.</h2>
                    
                <h2>Minhas Skils são {knowledges.skills.join(', ')}.</h2>
                    
                <h3>Falo {knowledges.languages.length} idiomas, são eles {knowledges.languages.join(', ')}.</h3>
                
            </div>
        );  
    }
   
};
    
export default AboutMe;