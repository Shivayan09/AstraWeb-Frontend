import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Templates from './pages/Templates.jsx'

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/templates' element={<Templates/>}/>
      </Routes>
    </>
  )
}

export default App
