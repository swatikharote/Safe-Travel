import React from 'react'
import {Routes ,Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import LoginPage from './LoginPage'
import About from './About'
import Community from './Community'
import Housing from './Housing'
import Payment from './Payment'
import SignUp from './SignUp'
import Support from './Support'
import WhishList from './WhishList'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/product' element={<Housing/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/wishlist' element={<WhishList/>}/>

        </Routes>
    </div>
  )
}

export default MainRoutes