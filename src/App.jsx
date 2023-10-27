'use client'
import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HalamanUtama from "./page/HalamanUtama"
import Register from "./page/Register"
import Login from "./page/Login"
import HomePage from "./page/HomePage"
import Details from "./page/User/Details"
import Booking from "./page/User/Booking"
import Transaksi from "./page/User/Transaksi"
import Usermanagement from "./page/Admin/Usermanagement"
import Edit from "./page/Admin/Update"
import PrivateRoute from "./privatroute/private"
function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' Component={HalamanUtama} />
          <Route path='Register' Component={Register} />
          <Route path='Login' Component={Login} />

          <Route path='HomePage' element={<PrivateRoute component={HomePage} />} />
          <Route path='Details' element={<PrivateRoute component={Details} />} />
          <Route path='Booking' element={<PrivateRoute component={Booking} />} />
          <Route path='Transaksi' element={<PrivateRoute component={Transaksi} />} />
          <Route path='Usermanagement' element={<PrivateRoute component={Usermanagement} />} />
          <Route path='Update/:id' element={<PrivateRoute component={Edit} />} />
          
        </Routes>
      </Router>
    </>
  )
}
export default App
