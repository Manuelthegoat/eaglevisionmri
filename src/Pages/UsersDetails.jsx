import React from "react";

const UsersDetails = () => {
  return (
    <>
      <div className="row">
        <h2>Savings Collected By Esther Komolafe5</h2>
        <div class="col-xl-4 col-xxl-4 col-sm-6">
          <div class="card crm-cart bg-primary border-0">
            <div class="card-header border-0 pt-15"></div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p class="text-white">&#8358; 278,559,550.0</p>
                <span class="d-block mb-3 text-white">Daily Savings</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-4 col-sm-6">
          <div class="card crm-cart bg-primary border-0">
            <div class="card-header border-0 pt-15"></div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p class="text-white">&#8358; 5,941,000.0</p>
                <span class="d-block mb-3 text-white">Total Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="col-xl-12 col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title"></h4>
              <div class="d-flex align-items-center flex-wrap flex-sm-nowrap">
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
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive active-projects">
                <div className="rowed"></div>

                <table id="projects-tbl" class="table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Payment Date</th>
                      <th>Desc</th>
                      <th>Type</th>
                      <th>Credit</th>
                      <th>Debit</th>
                      <th>Avail Bal (N)</th>
                      <th>Old Bal (N)</th>
                      <th>Mode</th>
                      <th>Collected By</th>
                      <th>Created At</th>
                      <th>Updated At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ABUBAKAR SULAIMAN</td>

                      <td>Jan. 13, 2023</td>
                      <td>DEPOSIT</td>
                      <td><span class="badge light badge-success">Credit</span></td>
                      <td>2,000.0</td>
                      <td>-----</td>
                      <td>146,000.0</td>
                      <td>144,000.0</td>
                      <td>CASH</td>
                      <td>Esther Komolafe</td>
                      <td>Jan. 1, 2023, 5:27 p.m.</td>
                      <td>Jan. 1, 2023, 5:27 p.m.</td>
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
                            <a class="dropdown-item" href="#">
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
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
