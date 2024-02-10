import { ToastContainer } from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css';

import { Home } from "./pages/home"

export function App() {
  return (
    <>
      <ToastContainer 
        autoClose={2000} 
        theme="dark" 
        pauseOnHover={false} 
        closeOnClick={true}
      />
      <Home />
    </>
  )
}

