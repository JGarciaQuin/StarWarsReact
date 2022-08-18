
import Imgc1 from '../cartas/yoda.jpg';
import Imgc2 from '../cartas/darth.jpg';
import Imgc3 from '../cartas/chew.jpg';

function Tarjeta({title,text,src}) {
  return (
    <>
      <div className='conteiner' >
          <div className='cont'>
              <div className='img'>
                  <img src={Imgc1} alt="Imgc1" className='imge' />
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
    </>
  );
}

export default Tarjeta;