import './App.css'
import {Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import Navbar from './components/Navbar.jsx'
import CreatePage from './pages/CreatePage.jsx'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/Create" element={<CreatePage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
