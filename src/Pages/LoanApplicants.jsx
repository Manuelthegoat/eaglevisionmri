import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

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
          apiUrl = `https://eaglevision.onrender.com/api/v1/loans/by-payment-date?startDate=${startDate}&endDate=${endDate}`;
        } else {
          // If start and end dates are not provided, fetch all data
          apiUrl = "https://eaglevision.onrender.com/api/v1/loans";
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        setLoans(data.data);

        const promises = data.data?.map(async (loan) => {
          const customerId = loan.customer;
          if (customerId) {
            const customerResponse = await fetch(
              `https://eaglevision.onrender.com/api/v1/customers/${customerId}`
            );
            const customerData = await customerResponse.json();
            return customerData.data;
          }
          return null;
        });

        // Wait for all customer details to be fetched
        const customerResults = await Promise.all(promises);
        setCustomerData(customerResults);
        toast.success("Fetched All");
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
  const deleteLoan = async (loanId) => {
    try {
      const response = await fetch(
        `https://eaglevision.onrender.com/api/v1/loans/${loanId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Deleted Loan:", data);
      toast.success("Loan deleted successfully");

      window.location.reload();
    } catch (error) {
      console.error(
        "There was a problem with the delete operation:",
        error.message
      );
      toast.error("An error occurred while deleting the loan", error.message);
    }
  };

  const exportToExcel = () => {
    const formattedData = loans.map((loanitem, index) => [
      index + 1,
      customerData ? `${customerData[index]?.name}\n${customerData[index]?.customersPhoneNo}` : "Loading customer data...",
      `₦ ${loanitem.amount}`,
      `₦ ${loanitem.interestRate}`,
      `₦ ${safeSumAndFormat(loanitem.amount, loanitem.interestRate)}`,
      // ... (add more columns as needed)
      loanitem.balance,
      loanitem.paymentDate ? new Date(loanitem.paymentDate).toDateString() : "N/A",
      loanitem.loanStartDate,
      loanitem.loanEndDate,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([["#", "Name", "Amt Approved (₦)", "Interest On Loan (₦)", "Total Loan + Interest (₦)", "Balance", "Payment Date", "Approved Date", "Loan Due Date"], ...formattedData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Loan Data");
    XLSX.writeFile(wb, "Eagle Vision Loan Report.xlsx");
  };

  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Loan Application List</h4>
          
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={() => {
              exportToExcel();
            }}
          >
            EXPORT AS EXCEL
          </button>
         

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
            <table className="table table-responsive-md" id="table-to-xls">
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
                    <strong>Type</strong>
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
                    <td>{loanitem.type === 'disbursement' || loanitem.balance === 'deposit' ? (
                      <span className="text-success">Credit</span>
                    ) : (
                      <span className="text-danger">Debit</span>
                    )}</td>
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
                          <Link
                            to={`/edit-loan/${loanitem._id}`}
                            class="dropdown-item"
                          >
                            Edit
                          </Link>
                        
                          <a
                            className="dropdown-item"
                            onClick={() => deleteLoan(loanitem._id)}
                          >
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
