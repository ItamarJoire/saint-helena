import { ToastContainer } from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css'

import { Home } from "./pages/home"

import { Whats } from "./containers" 

export function App() {
  return (
    <>
      <Whats />
      <ToastContainer autoClose={2000} theme="dark" pauseOnHover={false} closeOnClick={true} />
      <Home />
    </>
  )
}

