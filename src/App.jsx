import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import Home from './pages/Home'
import './bootstrap.min.css'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
