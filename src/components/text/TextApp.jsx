import React from 'react';
import './text.css';
import Yoda from '../text/yoda11.png'
import Titulo from '../text/titulo1.png'

function TextApp() {
    return (
        <>
        <section>
            <div className="content">
            <div className="textbox">
                <h2>Ven y conoce mas <br />Sobre <span>StarWars</span> </h2>
                <p>Se sitúa en una galaxia muy lejana, donde durante siglos ha existido un cruento enfrentamiento entre los Jedi, 
                    quienes abogan por el orden y la justicia en la República Galáctica, y los Sith, una secta de seres que utilizan el lado oscuro de la Fuerza en su intento 
                    por apoderarse del dominio galáctico.
                </p>
                <a href="#">Ver más</a>
            </div>
        </div>
        <div className="imgBox">
            <img src={Yoda} alt="Yoda" className='chuba' />
        </div>
        </section>  

        <center><img src={Titulo} alt="" /></center>
        </>
    )
}

export default TextApp;