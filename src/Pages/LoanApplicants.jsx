import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoanApplicants = () => {
  const [loans, setloans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    fetch("https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans")
        .then(response => response.json())
        .then(async data => {
            // Extract the customer IDs
            const customerIds = data.data.map(loan => loan.customer);

            // Fetch details for each customer
            const customerDetailsPromises = customerIds.map(id => 
                fetch(`https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customers/${id}`)
                    .then(response => response.json())
            );

            // Await all promises to complete
            const customerDetailsResponses = await Promise.all(customerDetailsPromises);

            // Extract data from each response
            const customerDetailsData = customerDetailsResponses.map(response => response.data);

            // Map the customer data to the respective loan
            const loansWithCustomerDetails = data.data.map((loan, index) => {
                return {
                    ...loan,
                    customerDetails: customerDetailsData[index]
                };
            });

            setloans(loansWithCustomerDetails);
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
            toast.error("Customer Failed To Fetched");
        })
        .finally(() => setLoading(false));
}, []);

 

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 class="card-title">Loan Application List</h4>

          <form class="d-flex align-items-center flex-wrap flex-sm-nowrap">
            <div class="mb-3 mt-2 mx-sm-2">
              <label class="sr-only">Search</label>
              <input type="Search" class="form-control" placeholder="Search" />
            </div>
            &nbsp;
            <button type="submit" class="btn btn-primary mb-2">
              Search
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-primary mb-2">Export As Excel</button>
          </form>
        </div>
        <div className="card-body">
          <div class="table-responsive">
            <table class="table table-responsive-md">
              <thead>
                <tr>
                  <th style={{ width: "80px" }}>
                    <strong>#</strong>
                  </th>
                  <th>
                    <strong>Name</strong>
                  </th>
                  <th>
                    <strong>Amt Approved (&#8358;)</strong>
                  </th>
                  <th>
                    <strong>Interest On Loan (&#8358;)</strong>
                  </th>
                  <th>
                    <strong>Total Loan + Interest(&#8358;)</strong>
                  </th>
                  <th>
                    <strong>Repayment (&#8358;)</strong>
                  </th>
                  <th>
                    <strong>Balance</strong>
                  </th>
                  <th>
                    <strong>Approved Date</strong>
                  </th>
                  <th>
                    <strong>Loan Due Date</strong>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {loans.map((loanitem, index) => (
                <tr>
                  <td>
                    <strong>01</strong>
                  </td>
                  <td>
                  {loanitem.customerDetails.name}
                    <br />
                   {loanitem.loanTitle}
                    <br />
                    {loanitem.customerDetails.customersPhoneNo}
                  </td>
                  <td>&#8358; {loanitem.amount}</td>
                  <td>&#8358; {loanitem.interestRate}</td>
                  <td>&#8358;3,720,000.0</td>
                  <td>0</td>
                  <td>&#8358;3,720,000.0</td>
                  <td> {loanitem.loanStartDate}</td>
                  <td>{loanitem.loanEndDate}</td>
                  <td>
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn btn-success light sharp"
                        data-bs-toggle="dropdown"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <circle fill="#000000" cx="5" cy="12" r="2" />
                            <circle fill="#000000" cx="12" cy="12" r="2" />
                            <circle fill="#000000" cx="19" cy="12" r="2" />
                          </g>
                        </svg>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="/loan-applicants-details">
                          View Details
                        </a>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>

                        <a class="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanApplicants;
