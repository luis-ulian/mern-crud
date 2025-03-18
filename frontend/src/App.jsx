import './App.css'
import {BrowserRouter} from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import Navbar from './Components/Navbar.jsx'

function App() {

  return (
    <div>
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App
