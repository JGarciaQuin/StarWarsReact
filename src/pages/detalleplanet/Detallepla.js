import React from 'react'
import './Detallespla.css'
import cp from '../detalles/fondito.jpg'
import person from '../detalles/person.png'
import { useParams } from 'react-router-dom'
import { UsePlanet } from '../../Hooks/UsePlanet'
 

const DetallePla = ({planet}) => {
const {name} = useParams();

  return (

    <div>
    
    <button>
      <a href='./Planetas'>Atrás</a> 
      </button>

    <div className='detalle'>
        <div className='img-detalle'>
          <img src={cp} alt="cp"  />
        </div>

        <div className='text-detalle'>
            <h1>Detalles de planetas</h1>
            <h3></h3>
            
            <div className='detalle-gri'>
                <div className='detalle-in'>
                    <h5>1.Es de color dorado</h5>
                </div>

                <div className='detalle-in'>
                    <h5>2.Es de color dorado</h5>
                </div>

                <div className='detalle-in'>
                    <h5>3.Es de color dorado</h5>
                </div>

                <div className='detalle-in'>
                    <h5>4.Es de color dorado</h5>
                </div>
            </div>
        </div>
    </div>

    <div>
        {people.filter(detallito => detallito.name===name).map((detallito,index)=>( <div key={index}>
            <p><h4> <span className='negrita'>Nombre:</span> {planet.name}</h4></p>
                    <p><h4> <span className='negrita'>Rotación:</span> {detallito.rotation_period}</h4></p>
                    <p><h4> <span className='negrita'>Orbital:</span> {detallito.orbital_period}</h4></p>
                    <p><h4> <span className='negrita'>Diámetro:</span> {detallito.diameter}</h4></p>
                    <p><h4> <span className='negrita'>Gravedad:</span> {detallito.gravity}</h4></p>
                    <p><h4> <span className='negrita'>Terreno:</span> {detallito.terrain}</h4></p>
                    <p><h4> <span className='negrita'>Superficie del agua:</span> {detallito.surface_water}</h4></p>
        </div> ))}
    </div>

    <div className='conteiner' >
          <div className='cont'>
              <div className='img'>
                  <img src={person} alt="person" className='imge' />
              </div>
              <div className='texto'>
                  <h1>¿Sabias qué?</h1>
                  <p> cuando las películas estaban en un comienzo preparándose para filmarse George Lucas había
                     propuesto que el personaje de Yoda fuera interpretado por un mono entrenado con una mascara del personaje,
                     menos mal se convenció que no lo hiciera y en vez se usará a Frank Oz con un títere del personaje.</p>
                    
                    <button>Detalles</button>
              </div>
          </div>      

             <div className='cont'>
              <div className='img'>
                  <img src={person} alt="person" className='imge' />
              </div>
              <div className='texto'>
                  <h1>¿Sabias qué?</h1>
                  <p> cuando las películas estaban en un comienzo preparándose para filmarse George Lucas había
                     propuesto que el personaje de Yoda fuera interpretado por un mono entrenado con una mascara del personaje,
                     menos mal se convenció que no lo hiciera y en vez se usará a Frank Oz con un títere del personaje.</p>
                    
                    <button>Detalles</button>
              </div>
          </div>  

             <div className='cont'>
              <div className='img'>
                  <img src={person} alt="person" className='imge' />
              </div>
              <div className='texto'>
                  <h1>¿Sabias qué?</h1>
                  <p> cuando las películas estaban en un comienzo preparándose para filmarse George Lucas había
                     propuesto que el personaje de Yoda fuera interpretado por un mono entrenado con una mascara del personaje,
                     menos mal se convenció que no lo hiciera y en vez se usará a Frank Oz con un títere del personaje.</p>
                    
                    <button>Detalles</button>
              </div>
          </div>     
      </div>

      
    </div>
  )
}

export default Detalle