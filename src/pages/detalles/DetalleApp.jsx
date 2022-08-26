import React from 'react'
import NavbarApp from '../../components/navbar/NavbarApp'
import FooterApp from '../../components/footer/FooterApp'

import  Detalle  from '../detalles/Detalle'




function DetalleApp() {
  return (
    
      <>
        <NavbarApp></NavbarApp>
        <Detalle></Detalle>
        <FooterApp></FooterApp>
        </>
      

  )
}

export default DetalleApp