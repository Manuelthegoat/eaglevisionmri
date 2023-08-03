import React from "react";

const SavingsList = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 class="card-title">All Savings</h4>
         
          <form class="d-flex align-items-center flex-wrap flex-sm-nowrap">
              <div class="mb-3 mt-2 mx-sm-2">
                <label class="sr-only">Search</label>
                <input
                  type="Search"
                  class="form-control"
                  placeholder="Search"
                />
              </div>
              &nbsp;
              <button type="submit" class="btn btn-primary mb-2">
                Search
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-primary mb-2">
            Export As Excel
          </button>
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
                    <strong>Customer</strong>
                  </th>
                  <th>
                    <strong>Customer ID</strong>
                  </th>
                  <th>
                    <strong>Phone No</strong>
                  </th>
                  <th>
                    <strong>Avail Balance(&#8358;)</strong>
                  </th>
                  <th>
                    <strong>Account Officer</strong>
                  </th>
                  <th>
                    <strong>Created At</strong>
                  </th>
                  <th>
                    <strong>Updated At</strong>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>01</strong>
                  </td>
                  <td>ISHOLA ADEWALE OLUWASEYI</td>
                  <td>EV0000001362</td>
                  <td>08034863864</td>
                  <td>3,600,000.0</td>
                  <td>uche Chioma</td>
                  <td>May 17, 2023, 9:23 a.m.</td>
                  <td>June 27, 2023, 2:19 p.m.</td>
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
                        <a class="dropdown-item" href="/customer-profile">
                          View Details
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

export default SavingsList;
