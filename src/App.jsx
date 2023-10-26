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
import PersonalDetail from "./page/User/PersonalDetail"
import Usermanagement from "./page/Admin/Usermanagement"
import Edit from "./page/Admin/Update"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HalamanUtama />} />
          <Route path='Register' element={<Register />} />
          <Route path='Login' element={<Login />} />
          <Route path='HomePage' element={<HomePage />} />
          <Route path='Details' element={<Details />} />
          <Route path='Booking' element={<Booking />} />
          <Route path='Transaksi' element={<Transaksi />} />
          <Route path='User/:id' element={<PersonalDetail />} />
          <Route path='Usermanagement' element={<Usermanagement />} />
          <Route path='Update/:id' element={<Edit />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
