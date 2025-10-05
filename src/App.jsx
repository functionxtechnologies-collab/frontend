import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Navbar = () => (
  <nav className="sticky top-0 z-30 backdrop-blur bg-black/40 border-b border-white/10">
    <div className="container flex items-center justify-between py-3">
      {/* Logo and Brand Name */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/src/assets/logo.png"
          alt="FuntionX Technologies"
          className="h-10 w-auto"
        />
        <span className="font-bold text-xl tracking-tight">FunctionX Technologies</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-2">
        <Link className="navlink" to="/services">Services</Link>
        <Link className="navlink" to="/about">About</Link>
        <Link className="navlink" to="/portfolio">Portfolio</Link>
        <Link className="navlink" to="/careers">Careers</Link>
        <Link className="navlink" to="/contact">Contact</Link>
      </div>
    </div>
  </nav>
);


export default function App(){return(<div><Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/portfolio' element={<Portfolio/>}/>
<Route path='/careers' element={<Careers/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer/></div>)}
