import React, { Component } from "react";
import "../footer/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='ContenedorPr'>
        <div className='ContenedorHJ1'>
            <h1>STARWARS</h1>
            <p>
               Disfruta de esta magnifica pagina web, puedes visitarme en mis redes sociales.
               ¡Gracias por visitarme!
            </p>
        </div>
        <div className='ContenedorHJ2'>
            <h1>Sigueme</h1>
            <a href='#'>
            <img href="#" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png'/>
            </a>
            <a href='#'>
            <img src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png'/>
            </a>
            <a href='#'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'/>
            </a>
        </div>
      </div>
      </>
    );
  }
}
