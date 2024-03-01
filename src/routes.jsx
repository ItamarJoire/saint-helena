import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, About, ChildEducation, StructureSalvador } from './pages'

import { Header, HeaderContact, Footer } from "./components"

export function RoutesApp() {
  return (
    <BrowserRouter>
      <HeaderContact />
      <Header />

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre" element={<About />} /> */}
        <Route path="/estrutura-salvador" element={<StructureSalvador />} />
        <Route path="/educacao-infantil" element={<ChildEducation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
