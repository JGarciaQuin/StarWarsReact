import React from 'react'
import './Detalles.css'
import cp from '../detalles/fondito.jpg'
import person from '../detalles/person.png'
import { useParams } from 'react-router-dom'
import { UsePersonajes } from '../../Hooks/UsePerson'
 

const Detalle = ({people}) => {
const {name} = useParams();

  return (

    <div>
    
    <button>
      <a href='./Personajes'>Atrás</a> 
      </button>

    <div className='detalle'>
        <div className='img-detalle'>
          <img src={cp} alt="cp"  />
        </div>

        <div className='text-detalle'>
            <h1>Detalles del personaje</h1>
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
            <p><h4> <span className='negrita'>Género:</span> {detallito.gender}</h4></p>
            <p><h4> <span className='negrita'>Nacimiento:</span> {detallito.birth_year}</h4></p>
            <p><h4> <span className='negrita'>Estatura:</span> {detallito.height}</h4></p>
            <p><h4> <span className='negrita'>Color de ojos:</span> {detallito.eye_color}</h4></p>
            <p><h4> <span className='negrita'>Color de cabello:</span> {detallito.hair_color}</h4></p>
            <p><h4> <span className='negrita'>Peso en KG:</span> {detallito.mass}</h4></p>
            <p><h4> <span className='negrita'>Color de piel:</span> {detallito.skin_color}</h4></p>
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