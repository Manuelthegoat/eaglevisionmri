import React from "react";

const LoanApplicants = () => {
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
                <tr>
                  <td>
                    <strong>01</strong>
                  </td>
                  <td>
                    ISHOLA ADEWALE OLUWASEYI
                    <br />
                    Individual Loan
                    <br />
                    08034863864
                  </td>
                  <td>&#8358;3,000,000.0</td>
                  <td>&#8358;720,000.0</td>
                  <td>&#8358;3,720,000.0</td>
                  <td>0</td>
                  <td>&#8358;3,720,000.0</td>
                  <td>March 30, 2023, midnight</td>
                  <td>Sept. 26, 2023</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanApplicants;
