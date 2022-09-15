import React, { useEffect } from 'react'
import './personajes.css'
import Imagenp1 from '../personajes/imgc1.jpg'
import { UsePersonajes } from '../../Hooks/UsePerson'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';



export const Personajes = () => {

  const { getAllPersonajes, people, setPeople, Contador, decrementar, incrementar } =
    UsePersonajes();
  useEffect(() => {
    getAllPersonajes(Contador);

    // console.log(dataPeople);
  }, [people]);




  return (
    <div className='conteiner'>      {
      people.map(people => (
        <div className='cont' key={setPeople}>

          <div className='img'>
            <img src={Imagenp1} alt="Imgc1" className='imge' />
          </div>


          <center><h1 className='titulito'>{people.name}</h1></center>
          <div className='contenido'>
            <p><h4> <span className='negrita'>Género:</span> {people.gender}</h4></p>
            <p><h4> <span className='negrita'>Nacimiento:</span> {people.birth_year}</h4></p>
            <p><h4> <span className='negrita'>Estatura:</span> {people.height}</h4></p>
            <p><h4> <span className='negrita'>Color de ojos:</span> {people.eye_color}</h4></p>
            <p><h4> <span className='negrita'>Color de cabello:</span> {people.hair_color}</h4></p>
            <p><h4> <span className='negrita'>Peso en KG:</span> {people.mass}</h4></p>
            <p><h4> <span className='negrita'>Color de piel:</span> {people.skin_color}</h4></p>
          </div>
          <center><button className='boton'><Link to={`/detalle/${people.name}`}>Detalles</Link></button></center>

        </div>
      ))
    }

      <div className='ContainerPage'>
        <button onClick={decrementar}>
          <FaAngleLeft size={20} />Devolver
        </button>
        <b>{Contador}</b>
        <button onClick={incrementar}>Siguiente
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  )
}