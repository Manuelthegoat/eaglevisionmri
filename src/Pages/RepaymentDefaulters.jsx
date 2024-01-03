import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";


const RepaymentDefaulters = () => {
  const [defaultersData, setDefaultersData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(
      "https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans/defaulters"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setDefaultersData(data.data);
      })
      .catch((error) => {
        setError(error.message);
      }) .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className="card">
        <div className="card-header">
          <h4 class="card-title">Defaulters' List</h4>
        </div>
        <div className="card-body">
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <div class="table-responsive">
              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th style={{ width: "80px" }}>
                      <strong>#</strong>
                    </th>
                    <th>
                      <strong>Customer</strong>
                    </th>
                    <th>
                      <strong>AMT REQUESTED (₦)</strong>
                    </th>
                    <th>
                      <strong>AMT APPROVED (₦)</strong>
                    </th>
                    <th>
                      <strong>NXT PAYMENT DATE</strong>
                    </th>
                    <th>
                      <strong>STATUS</strong>
                    </th>
                    <th>
                      <strong>PAYMENT SCHEDULE</strong>
                    </th>
                    <th>
                      <strong>Updated At</strong>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {defaultersData.length === 0 ? (
                    <tr>
                      <td colSpan="9">No defaulters found</td>
                    </tr>
                  ) : (
                    defaultersData.map((defaulter, index) => (
                      <tr key={index}>
                        {/* ... Table data */}
                        <td>{index + 1}</td>
                        <td>{defaulter.customer}</td>
                        <td>{defaulter.amountRequested}</td>
                        <td>{defaulter.amountApproved}</td>
                        <td>{defaulter.nextPaymentDate}</td>
                        <td>
                          <span class="badge light badge-danger">
                            {defaulter.status}
                          </span>
                        </td>
                        <td>{defaulter.paymentSchedule}</td>
                        <td>{defaulter.updatedAt}</td>
                        <td>
                          <div class="dropdown">
                            <button
                              type="button"
                              class="btn btn-success light sharp"
                              data-bs-toggle="dropdown"
                            >
                              {/* ... Dropdown button content */}
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RepaymentDefaulters;
