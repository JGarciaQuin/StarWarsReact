import React from 'react';
import './text.css';
import Chuba from '../text/chuba1.png'

function TextApp() {
    return (
        <>
        <section>
            <div className="content">
            <div className="textbox">
                <h2>Ven y conoce mas <br />Sobre <span>StarWars</span> </h2>
                <p>se sitúa en una galaxia muy lejana, donde durante siglos ha existido un cruento enfrentamiento entre los Jedi, 
                    quienes abogan por el orden y la justicia en la República Galáctica, y los Sith, una secta de seres que utilizan el lado oscuro de la Fuerza en su intento 
                    por apoderarse del dominio galáctico.
                </p>
                <a href="#">Ver +</a>
            </div>
        </div>

        <div className="imgBox">
            <img src={Chuba} alt="Chuba" className='chuba' />
        </div>
        </section>
        </>
    )
}

export default TextApp;