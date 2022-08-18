import React from 'react';
import PersonajesApp from './pages/personajes/PersonajesApp'
import PlanetasApp from './pages/planetas/PlanetasApp'
import HomeApp from './pages/HomeApp';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <Routes>
      <Route path='/' element={<HomeApp/ >}></Route>
      <Route path='/Personajes' element={<PersonajesApp/ >}></Route>
      <Route path='/Planetas' element={<PlanetasApp/ >}></Route>
   </Routes>
  );
}

export default App;
