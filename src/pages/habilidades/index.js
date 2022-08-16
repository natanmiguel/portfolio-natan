import './habilidades.css';
import React from 'react';
import  {FaHtml5, FaGithubAlt, FaCss3Alt} from 'react-icons/fa';
import  {IoLogoJavascript, IoLogoReact } from "react-icons/io5";

function Habilidades() {
    return (
        <div className='habilidades'>
            <div className='habilidadesTitulos'>
                <h1>Habilidades</h1>
            </div>

            <div className='skills'>
                <ul>
                    <li>
                    <FaCss3Alt className='logoCSS logoSkills'/>
                    CSS 3
                    
                    </li>
                    <li>
                    <FaHtml5 className='logoHTML logoSkills' />
                    HTML 5
                    </li>
                    <li>
                    <IoLogoJavascript className='logoJS logoSkills'/>
                    JavaScript
                    </li>
                    <li>
                    <FaGithubAlt className='logoGIT logoSkills'/>
                    Git/Github
                    </li>
                    <li>
                    <IoLogoReact className='logoREACT logoSkills'/>
                    React
                    </li>

                </ul>
            </div>
        </div>
    )

}

export default Habilidades;