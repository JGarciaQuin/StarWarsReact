import React from 'react'
import NavbarApp from '../../components/navbar/NavbarApp'
import FooterApp from '../../components/footer/FooterApp'
import { Planetas } from './Planetas'

function PlanetasApp() {
  return (
    <div>
        <NavbarApp></NavbarApp>
        <Planetas></Planetas>
        <FooterApp></FooterApp>
    </div>
  )
}

export default PlanetasApp
