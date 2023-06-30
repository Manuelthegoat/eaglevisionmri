import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCustomer from './Pages/AddCustomer'
import CustomerList from './Pages/CustomerList'
import Home from './Pages/Home'
import LoanApplicants from './Pages/LoanApplicants'
import LoanApplication from './Pages/LoanApplication'
import Loans from './Pages/Loans'
import RepaymentDefaulters from './Pages/RepaymentDefaulters'
import Savings from './Pages/Savings'
import SavingsList from './Pages/SavingsList'
import Users from './Pages/Users'

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
        <Route path='/users' element={<Users />} />
        <Route path='/new-loan-applicant' element={<LoanApplication />} />
        <Route path='/loan-applicants' element={<LoanApplicants />} />
        <Route path='/repayment-defaulters' element={<RepaymentDefaulters />} />
      </Routes>
    </>
  )
}

export default Routing
