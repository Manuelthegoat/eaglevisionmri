import React from "react";

const ChangePassword = () => {
  return (
    <>
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Change Password</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="row">
                  <div class="mb-3 col-md-12">
                    <label class="form-label">Old Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Old Password"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label class="form-label">New Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                   <ul>
                    <li>Your password can’t be too similar to your other personal information.</li>
                    <li>Your password must contain at least 8 characters.</li>
                    <li>Your password can’t be a commonly used password.</li>
                    <li>Your password can’t be entirely numeric.</li>
                   </ul>
                  </div>
                  
                  <div class="mb-3 col-md-12">
                    <label class="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm New Password"
                    />
                  </div>

                
                </div>

                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
