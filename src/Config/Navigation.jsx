import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import SigininPhone from '../Components/SigininPhone'
import Otpcode from '../Components/Otpcode'
import Home from '../Components/Home'
import AddProdect from '../Components/AddProdect'
import Order from '../Components/Order'

function Navigation() {
  return (
    <div>
          <Routes>
<Route path='/' element={<Home/>}></Route>


<Route path='/Otpcode' element={<Otpcode/>}></Route>
<Route path='/AddProdect' element={<AddProdect/>}></Route>
<Route path='/order:id' element={<Order/>}></Route>




      </Routes>


    </div>
  )
}

export default Navigation
