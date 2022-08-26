import React from 'react';
import PersonajesApp from './pages/personajes/PersonajesApp'
import PlanetasApp from './pages/planetas/PlanetasApp'
import HomeApp from './pages/HomeApp';
import { Routes, Route } from 'react-router-dom'
import DetalleApp from './pages/detalles/DetalleApp';

function App() {
  return (
   <Routes>
      <Route path='/' element={<HomeApp/ >}></Route>
      <Route path='/Personajes' element={<PersonajesApp/ >}></Route>
      <Route path='/Planetas' element={<PlanetasApp/ >}></Route>
      <Route path='/Detalle' element={<DetalleApp/ >}></Route>
      
   </Routes>
  );
}

export default App;
