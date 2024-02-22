import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Nature, About } from './pages'

import { Header, HeaderContact, Footer } from "./components"

export function RoutesApp() {
  return (
    <BrowserRouter>
      <HeaderContact />
      <Header />

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contato-com-a-natureza" element={<Nature />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
