import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomer from "./Pages/AddCustomer";
import AddNewUser from "./Pages/AddNewUser";
import ChangePassword from "./Pages/ChangePassword";
import CreateGroupPermission from "./Pages/CreateGroupPermission";
import CustomerList from "./Pages/CustomerList";
import Home from "./Pages/Home";
import ListGroupPermission from "./Pages/ListGroupPermission";
import LoanApplicants from "./Pages/LoanApplicants";
import LoanApplication from "./Pages/LoanApplication";
import LoanDurations from "./Pages/LoanDurations";
import Loans from "./Pages/Loans";
import RepaymentDefaulters from "./Pages/RepaymentDefaulters";
import Savings from "./Pages/Savings";
import SavingsList from "./Pages/SavingsList";
import Users from "./Pages/Users";
import UsersList from "./Pages/UsersList";
import CustomerProfile from "./Pages/CustomerProfile";
import AddDepositWithdrawal from "./Pages/AddDepositWithdrawal";
import LoanApplicantsDetails from "./Pages/LoanApplicantsDetails";
import CustomerAvailableBalance from "./Pages/CustomerAvailableBalance";
import UsersDetails from "./Pages/UsersDetails";
import RepayLoan from "./Pages/RepayLoan";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers-list" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/customer-profile/:id" element={<CustomerProfile />} />
        <Route path="/savings-list" element={<SavingsList />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/add-contribution/:id" element={<AddDepositWithdrawal />} />
        <Route path="/repay-loan/:id" element={<RepayLoan />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route
          path="/loan-applicants-details/:id"
          element={<LoanApplicantsDetails />}
        />
        <Route
          path="/customer-available-balance/:id"
          element={<CustomerAvailableBalance />}
        />
        <Route path="/user-details/:id" element={<UsersDetails />} />
        <Route path="/add-user" element={<AddNewUser />} />
        <Route path="/new-loan-applicant" element={<LoanApplication />} />
        <Route path="/loan-applicants" element={<LoanApplicants />} />
        <Route path="/repayment-defaulters" element={<RepaymentDefaulters />} />
        <Route
          path="/list-group-and-permissions"
          element={<ListGroupPermission />}
        />
        <Route
          path="/create-group-and-permissions"
          element={<CreateGroupPermission />}
        />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/loan-duration" element={<LoanDurations />} />
      </Routes>
    </>
  );
};

export default Routing;
