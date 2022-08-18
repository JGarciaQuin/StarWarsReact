import React from 'react'

function Plantilla({photo, title, parraf}) {
  return (
    <div>
         <div className='cont'>
              <div className='img'>
                  <img src={photo} alt="Imgc2" className='imge' />
              </div>
              <div className='texto'>
                  <h1>{ title }</h1>
                  <p>{parraf}</p>
                    
                <button>Detalles</button>
              </div>
          </div>
    </div>
  )
}

export default Plantilla