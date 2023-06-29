import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCustomer from './Pages/AddCustomer'
import CustomerList from './Pages/CustomerList'
import Home from './Pages/Home'
import LoanApplication from './Pages/LoanApplication'
import Loans from './Pages/Loans'
import Savings from './Pages/Savings'
import SavingsList from './Pages/SavingsList'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers-list' element={<CustomerList />} />
        <Route path='/add-customer' element={<AddCustomer />} />
        <Route path='/savings' element={<Savings />} />
        <Route path='/savings-list' element={<SavingsList />} />
        <Route path='/loans' element={<Loans />} />
        <Route path='/new-loan-applicant' element={<LoanApplication />} />
      </Routes>
    </>
  )
}

export default Routing
