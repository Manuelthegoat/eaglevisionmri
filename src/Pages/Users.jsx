import React from "react";

const Users = () => {
  return (
    <div className="row">
      <div class="col-xl-4  col-lg-6 col-sm-6">
        <div class="widget-stat card bg-primary">
          <div class="card-body  p-4">
            <div class="media">
              <span class="me-3">
                <i class="la la-users"></i>
              </span>
              <div class="media-body text-white">
                <p class="mb-1">All Users</p>
                <h3 class="text-white">15</h3>
                <div class="progress mb-2 bg-secondary">
                  <div
                    class="progress-bar progress-animated bg-white"
                    style={{"width": "80%"}}
                  ></div>
                </div>
                {/* <small>80% Increase in 20 Days</small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4  col-lg-6 col-sm-6">
        <div class="widget-stat card bg-primary">
          <div class="card-body  p-4">
            <div class="media">
              <span class="me-3">
                <i class="la la-users"></i>
              </span>
              <div class="media-body text-white">
                <p class="mb-1">MANAGER(S)</p>
                <h3 class="text-white">1</h3>
                <div class="progress mb-2 bg-secondary">
                  <div
                    class="progress-bar progress-animated bg-white"
                    style={{"width": "80%"}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4  col-lg-6 col-sm-6">
        <div class="widget-stat card bg-primary">
          <div class="card-body  p-4">
            <div class="media">
              <span class="me-3">
                <i class="la la-users"></i>
              </span>
              <div class="media-body text-white">
                <p class="mb-1">ACCOUNT OFFICER(S)</p>
                <h3 class="text-white">1</h3>
                <div class="progress mb-2 bg-secondary">
                  <div
                    class="progress-bar progress-animated bg-white"
                    style={{"width": "80%"}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4  col-lg-6 col-sm-6">
        <div class="widget-stat card bg-primary">
          <div class="card-body  p-4">
            <div class="media">
              <span class="me-3">
                <i class="la la-users"></i>
              </span>
              <div class="media-body text-white">
                <p class="mb-1">DPO(S)</p>
                <h3 class="text-white">2</h3>
                <div class="progress mb-2 bg-secondary">
                  <div
                    class="progress-bar progress-animated bg-white"
                    style={{"width": "80%"}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4  col-lg-6 col-sm-6">
        <div class="widget-stat card bg-primary">
          <div class="card-body  p-4">
            <div class="media">
              <span class="me-3">
                <i class="la la-users"></i>
              </span>
              <div class="media-body text-white">
                <p class="mb-1">ASSISTANT MANAGER(S)</p>
                <h3 class="text-white">1</h3>
                <div class="progress mb-2 bg-secondary">
                  <div
                    class="progress-bar progress-animated bg-white"
                    style={{"width": "80%"}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
