import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoanApplicants = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let apiUrl;

        if (startDate && endDate) {
          // If start and end dates are provided, fetch data for the date range
          apiUrl = `https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans/by-payment-date?startDate=${startDate}&endDate=${endDate}`;
        } else {
          // If start and end dates are not provided, fetch all data
          apiUrl = "https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans";
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        setLoans(data.data);

        const promises = data.data?.map(async (loan) => {
          const customerId = loan.customer;
          if (customerId) {
            const customerResponse = await fetch(
              `https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customers/${customerId}`
            );
            const customerData = await customerResponse.json();
            return customerData.data;
          }
          return null;
        });

        // Wait for all customer details to be fetched
        const customerResults = await Promise.all(promises);
        setCustomerData(customerResults);
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Failed to fetch loan data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  const handleSearch = (e) => {
    e.preventDefault();
    setStartDate(e.target.elements.startDate.value);
    setEndDate(e.target.elements.endDate.value);
  };

  function safeSumAndFormat(a, b) {
    const numberA = parseFloat(a);
    const numberB = parseFloat(b);

    if (!isNaN(numberA) && !isNaN(numberB)) {
      return (numberA + numberB).toFixed(2);
    }

    return "N/A"; // or some other default value if the conversion fails
  }

  return (
    <>
      {loading && <Loader />}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Loan Application List</h4>

          <form
            className="d-flex align-items-center flex-wrap flex-sm-nowrap"
            onSubmit={handleSearch}
          >
            <div className="mb-3 mt-2 mx-sm-2">
              <label className="sr-only">Search</label>
              <input
                type="date"
                className="form-control"
                placeholder="Select start date"
                name="startDate"
              />
              <input
                type="date"
                className="form-control"
                placeholder="Select end date"
                name="endDate"
              />
            </div>
            &nbsp;
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </form>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-responsive-md">
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
                  {/* <th>
                    <strong>Repayment (&#8358;)</strong>
                  </th> */}
                  <th>
                    <strong>Balance</strong>
                  </th>
                  <th>
                    <strong>Payment Date</strong>
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
                  <tr key={index}>
                    <td>
                      <strong>{index + 1}</strong>
                    </td>

                    <td>
                      {customerData ? (
                        <>
                          <Link
                            to={`/loan-applicants-details/${loanitem._id}`}
                            class="dropdown-item"
                          >
                            {customerData[index]?.name}
                          </Link>
                          <br />
                          {customerData[index]?.customersPhoneNo}
                        </>
                      ) : (
                        "Loading customer data..."
                      )}
                      {loanitem.loanTitle}
                    </td>
                    <td>&#8358; {loanitem.amount}</td>
                    <td>&#8358; {loanitem.interestRate}</td>
                    <td>
                      &#8358;
                      {safeSumAndFormat(loanitem.amount, loanitem.interestRate)}
                    </td>
                    {/* <td>&#8358;{loanitem.repaymentAmount}</td> */}
                    <td>&#8358;{loanitem.balance}</td>
                    <td>
                      {" "}
                      {loanitem.paymentDate
                        ? new Date(loanitem.paymentDate).toDateString()
                        : "N/A"}
                    </td>
                    <td>{loanitem.loanStartDate}</td>
                    <td>{loanitem.loanEndDate}</td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-success light sharp"
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
                        <div className="dropdown-menu">
                          <Link
                            to={`/loan-applicants-details/${loanitem._id}`}
                            class="dropdown-item"
                          >
                            View Details
                          </Link>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
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
