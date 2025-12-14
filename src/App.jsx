import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar';
import InventoryPage from './Pages/InventoryPage';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <NavBar>
      <p>Hello?</p>
    </NavBar> */}


    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/contact" element={<AboutUsPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
