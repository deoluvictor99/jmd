
// components
import Nav from './components/Navbar'

import Footer from './components/Footer'

import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import {Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Nav/>
      <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/AboutUs"  element={<AboutUs/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        </div>
      <Footer/>
    </>
  )
}

export default App;
