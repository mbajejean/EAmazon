import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route index element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='Contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App