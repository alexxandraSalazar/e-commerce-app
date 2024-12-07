//import { useState } from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'

import '/src/App.css'

function App() {

  return (
    <div>
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <SignIn/>
      <NotFound/>
    </div>
  )
}

export default App
