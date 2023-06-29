import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerList from './Pages/CustomerList'
import Home from './Pages/Home'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers-list' element={<CustomerList />} />
      </Routes>
    </>
  )
}

export default Routing
