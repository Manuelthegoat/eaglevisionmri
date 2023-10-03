import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoanApplicants = () => {
  const [loans, setloans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [allCustomers, setAllCustomers] = useState([]); // stores all fetched data
  const [displayedCustomers, setDisplayedCustomers] = useState([]); // stores data currently displayed in table

  useEffect(() => {
    fetch("https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans")
      .then((response) => response.json())
      .then(async (data) => {
        // Extract the customer IDs
        const customerIds = data.data.map((loan) => loan.customer);

        // Fetch details for each customer
        const customerDetailsPromises = customerIds.map((id) =>
          fetch(
            `https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customers/${id}`
          ).then((response) => response.json())
        );

        // Await all promises to complete
        const customerDetailsResponses = await Promise.all(
          customerDetailsPromises
        );

        // Extract data from each response
        const customerDetailsData = customerDetailsResponses.map(
          (response) => response.data
        );

        // Map the customer data to the respective loan
        const loansWithCustomerDetails = data.data.map((loan, index) => {
          return {
            ...loan,
            customerDetails: customerDetailsData[index],
          };
        });

        setloans(loansWithCustomerDetails);
        setAllCustomers(loansWithCustomerDetails);
        setDisplayedCustomers(loansWithCustomerDetails);
        console.log(loansWithCustomerDetails);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        toast.error("Customer Failed To Fetched");
      })
      .finally(() => setLoading(false));
  }, []);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);

    // Immediately filter the data when a date is selected
    const date = new Date(event.target.value);
    const filteredCustomers = allCustomers.filter((customer) => {
      const customerCreatedAt = new Date(customer.createdAt);
      return customerCreatedAt.toDateString() === date.toDateString();
    });

    setDisplayedCustomers(filteredCustomers);
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
          <h4 class="card-title">Loan Application List</h4>

          <div class="d-flex align-items-center flex-wrap flex-sm-nowrap">
            <div class="mb-3 mt-2 mx-sm-2">
              <label class="sr-only">Search</label>
              <input
                type="date"
                class="form-control"
                placeholder="Search"
                onChange={handleDateChange}
              />{" "}
            </div>
            &nbsp;
            <button type="submit" class="btn btn-primary mb-2">
              Filter By Date
            </button>
          </div>
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
                {displayedCustomers.map((loanitem, index) => (
                  <tr>
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>
                      {loanitem.customerDetails?.name}
                      <br />
                      {loanitem.loanTitle}
                      <br />
                      {loanitem.customerDetails?.customersPhoneNo}
                    </td>
                    <td>&#8358; {loanitem.amount}</td>
                    <td>&#8358; {loanitem.interestRate}</td>
                    <td>
                      &#8358;{" "}
                      {safeSumAndFormat(loanitem.amount, loanitem.interestRate)}
                    </td>
                    <td>0</td>
                    <td>&#8358;{loanitem.amount}</td>
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
                          <Link
                            to={`/loan-applicants-details/${loanitem._id}`}
                            class="dropdown-item"
                          >
                            View Details
                          </Link>
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
