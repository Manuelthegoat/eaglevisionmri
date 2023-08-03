import React from "react";

const LoanApplicantsDetails = () => {
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="profile card card-body px-3 pt-3 pb-0">
            <div class="profile-head">
              <div class="photo-content">
                <div class="cover-photo rounded"></div>
              </div>
              <div class="profile-info">
                <div class="profile-photo">
                  <img
                    src="images/userimage.png"
                    class="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <div class="profile-details">
                  <div class="profile-name px-3 pt-2">
                    <h4 class="text-primary mb-0">ISHOLA ADEWALE OLUWASEYI</h4>
                    <p>Phone: 09039168715</p>
                  </div>
                  <div class="profile-email px-2 pt-2">
                    <h4 class="text-muted mb-0">
                      Account Officer: nmesonma Ezeh (08168184111)
                    </h4>
                    <h4 className="text-muted mb-0">
                      Guarantor Name: guarantor #5543
                    </h4>
                    <p>Guarantor Phone: 09039168715</p>
                  </div>
                  <div class="dropdown ms-auto">
                    <a
                      href="#"
                      class="btn btn-primary light sharp"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li class="dropdown-item">
                        <i class="fa fa-user-circle text-primary me-2"></i> View
                        Customer Details
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="card">
          <div class="card-body">
            <div class="profile-statistics">
              <div class="text-center">
                <div class="row">
                  <div class="col">
                    <a class="btn btn-primary mb-1 me-1">Deposits/Withdrawal</a>
                  </div>
                  <div class="col">
                    <a class="btn btn-outline-primary mb-1 me-1">Loans</a>{" "}
                  </div>
                  <div class="col">
                    <a class="btn btn-primary mb-1 me-1">Available Balance</a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-xl-12 col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Repayments</h4>
              <div class="d-flex align-items-center flex-wrap flex-sm-nowrap">
                <a href="/add-contribution" className="btn btn-primary mb-2">
                  Add Deposits/Withdrawal
                </a>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive active-projects">
                <div className="rowed"></div>

                <table id="projects-tbl" class="table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Amount Paid</th>
                      <th>Amount To Pay</th>
                      <th>Mode</th>
                      <th>Collection Officer</th>
                      <th>Uploaded By Officer</th>
                      <th>Payment Date</th>
                      <th>Created At</th>
                      <th>Updated At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AGU CHINWENDU SAMUEL</td>

                      <td>1,120,000.0</td>
                      <td>1,120,000.0</td>
                      <td>TRANSFER</td>
                      <td>Esther Komolafe</td>
                      <td>Peace Malachi</td>
                      <td>May 21, 2022, midnight</td>
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

export default LoanApplicantsDetails;
