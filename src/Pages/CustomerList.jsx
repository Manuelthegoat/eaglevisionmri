import React from "react";

const CustomerList = () => {
  return (
    <>
      {/* <div>
        <div class="table-responsive">
          <div class="tbl-caption">
            <h4 class="heading mb-0">Active Projects</h4>
          </div>
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
                  <strong>Customer No</strong>
                </th>
                <th>
                  <strong>Phone</strong>
                </th>
                <th>
                  <strong>STATUS</strong>
                </th>
                <th>
                  <strong>Account Officer</strong>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>01</strong>
                </td>
                <td>0KPE HAPPINESS CHIOMA</td>
                <td>EV0000000726</td>
                <td>09039168715</td>
                <td>
                  <span class="badge light badge-success">ACTIVE</span>
                </td>
                <td>nmesonma Ezeh</td>
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
       */}
      <div class="col-xl-12 col-xxl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Customers List</h4>
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
              <a href="Create" className="btn btn-primary mb-2">
                Add New Member
              </a>
            </form>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive active-projects">
              <div className="rowed">
                {/* <form class="d-flex align-items-center flex-wrap flex-sm-nowrap">
                 
                //   <button type="submit" class="btn btn-primary mb-2">
                //     Search
                //   </button>
                // </form> */}
              </div>

              <table id="projects-tbl" class="table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Customer NO</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Account Officer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0KPE HAPPINESS CHIOMA</td>

                    <td>EV0000000726</td>
                    <td>09039168715</td>
                    <td>
                      <span class="badge light badge-success">ACTIVE</span>
                    </td>
                    <td>nmesonma Ezeh</td>
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
    </>
  );
};

export default CustomerList;
