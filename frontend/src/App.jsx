
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './page/Home/Home'
import Cart from './page/cart/Cart'
import PlaceOrder from './page/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Verify from './page/verify/verify'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './page/cart/Myorders/MyOrders'
function App() {

  const [showLogin , setShowLogin ] =useState(false);
  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} /> :<></>}
      <div className='app'>
        <Navbar  setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={< Cart />} />
          <Route path='/Order' element={< PlaceOrder />} />
          <Route path='/verify' element={< Verify />} />
          <Route path='/MyOrders' element={< MyOrders />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
