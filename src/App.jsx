import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BusinessEg from './pages/BusinessEg.jsx'
import PortfolioEg from './pages/PortfolioEg.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/businessEg' element={<BusinessEg/>}/>
        <Route path='/portfolioEg' element={<PortfolioEg/>}/>
      </Routes>
    </>
  )
}

export default App
