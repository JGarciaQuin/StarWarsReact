import React, { useEffect, useState } from 'react'
import './planetas.css'
import Imagenp2 from '../planetas/tato.jpg'


export const Planetas = () => {

    const[planet, setPlanet] = useState([]);

    useEffect(() => {
        async function fetchPlanet(){
            const planeta = await fetch ('https://swapi.dev/api/planets/');
            const data = await planeta.json();
            setPlanet(data.results);
        }
        fetchPlanet();
    },[]);

  return (
    <div className='conteiner'>
        {
            planet.map(planet =>(
                <div className='cont' key={setPlanet}>

                    <div className='img'>
                  <img src={Imagenp2} alt="Imgc1" className='imge' />
              </div>

            
                  <center><h1 className='titulito'>{planet.name}</h1></center>
                  <div className='contenido'>
                    <p><h4> <span className='negrita'>Nombre:</span> {planet.name}</h4></p>
                    <p><h4> <span className='negrita'>Rotación:</span> {planet.rotation_period}</h4></p>
                    <p><h4> <span className='negrita'>Orbital:</span> {planet.orbital_period}</h4></p>
                    <p><h4> <span className='negrita'>Diámetro:</span> {planet.diameter}</h4></p>
                    <p><h4> <span className='negrita'>Gravedad:</span> {planet.gravity}</h4></p>
                    <p><h4> <span className='negrita'>Terreno:</span> {planet.terrain}</h4></p>
                    <p><h4> <span className='negrita'>Superficie del agua:</span> {planet.surface_water}</h4></p>
                  </div>
                  <center><button className='boton'>Detalles</button></center>
                </div>
            ))
        }
    </div>
  )
}