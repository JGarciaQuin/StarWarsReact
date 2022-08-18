import React from 'react'
import NavbarApp from '../../components/navbar/NavbarApp'
import FooterApp from '../../components/footer/FooterApp'
import { Personajes } from './Personajes'


function PersonajesApp() {
  return (
    
      <div>
        <NavbarApp></NavbarApp>
        <Personajes></Personajes>
        <FooterApp></FooterApp>
      </div>

  )
}

export default PersonajesApp
