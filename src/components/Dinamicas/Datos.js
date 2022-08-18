import imagence1 from './chew.jpg'
import imagence2 from './darth.jpg'
import imagence3 from './yoda.jpg'
import Plantilla from './Plantilla'
import './Tarjeta.css'

const DataSave=[ {

    id:1,
    imagen: imagence3,
    titulo: '¿Sabias que?',
    texto: 'cuando las películas estaban en un comienzo preparándose para filmarse George Lucas había propuesto que el personaje de Yoda fuera interpretado por un mono entrenado con una mascara del personaje menos mal se convenció que no lo hiciera y en vez se usará a Frank Oz con un títere del personaje'
   },
   
   {
    id:2,
    imagen: imagence2,
    titulo: '¿Sabias que?',
    texto: 'Este personaje está prohibido en todos los eventos oficiales de Star Wars. David Prowse, el actor que interpretó a este villano del lado oscuro (en forma, no en voz) tiene prohibido asistir a las convenciones oficiales de la película, porque George Lucas lo encuentra molesto.'
   },

   {
    id:3,
    imagen: imagence1,
    titulo: '¿Sabias que?',
    texto: 'Chewbacca se inspiró en el viejo perro de George Lucas. Era un Alaskan Malamute, una raza grande y peluda que pesa alrededor de 60 kilos. Mientras que su voz es la mezcla de distintas voces o sonidos de animales, como osos, morsas leones, tejones y otros animales medio moribundos.'
   }
]

function Datos (){
    return(

        <div className='conteinn'>
            {DataSave.map(llamado=>(

                <div key={llamado.id}>
                    <Plantilla photo={llamado.imagen} title={llamado.titulo} parraf={llamado.texto} />
                </div>

            ))}
        </div>

    )
}

export default Datos
