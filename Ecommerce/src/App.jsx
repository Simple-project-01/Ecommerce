import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from "./Components/Homepage/Home"
import Contactpage from './Components/Contactpage/Contactpage'
import Aboutpage from './Components/Aboutpage/Aboutpage'
import Signup from './Components/Signup/Signup'

function App() {
  return (
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Contact' element={<Contactpage/>} />
            <Route path='/About' element={<Aboutpage/>} />
            <Route path='/Signup' element={<Signup/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App