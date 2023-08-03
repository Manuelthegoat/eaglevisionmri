import React from "react";

const AddNewUser = () => {
  return (
    <>
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Add User</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Middle Name</label>
                    <input
                      type="text"
                      placeholder="Middle Name"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label>Phone</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Sex</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Passport</label>
                    <input type="file" class="form-control" />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Role:</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Select Role</option>
                      <option>Account Officer</option>
                      <option>Manager</option>
                      <option>Assistant Manager</option>
                      <option>DPO</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">BVN</label>
                    <input
                      type="number"
                      placeholder="BVN"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Home Address</label>
                    <input
                      type="text"
                      placeholder="Home Address"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Email</label>
                    <input
                      type="number"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-check custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheckBox1"
                    required
                  />
                  <label class="form-check-label" for="customCheckBox1">
                    Is Active
                  </label>
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewUser;
