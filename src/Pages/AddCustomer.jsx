import React from "react";

const AddCustomer = () => {
  return (
    <div>
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Add Customer</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Account Holder's Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Applicants Full Name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Occupation</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Occupation"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label>Place Of Birth</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Place Of Birth"
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
                    <label class="form-label">Zip</label>
                    <input type="file" class="form-control" />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Customer's Phone Number</label>
                    <input
                      type="number"
                      placeholder="Customer's Phone"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Marital Status</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Select One</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Name</label>
                    <input
                      type="number"
                      placeholder="Spouse Name"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Phone No</label>
                    <input
                      type="number"
                      placeholder="Spouse Phone No"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Means of Identification</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>
                        Intl Passport, drivers license etc...
                      </option>
                      <option>International Passport</option>
                      <option>NIN</option>
                      <option>Voter's Card</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">
                      Means of Identification Number: (if others, enter ID name
                      and ID number)
                    </label>
                    <input
                      type="number"
                      placeholder="Intl Passport, drivers license Number etc..."
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Bank Name</label>
                    <input
                      type="number"
                      placeholder="Bank Name"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Bank Account No</label>
                    <input
                      type="number"
                      placeholder="Bank Account Number"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Bank Account Name</label>
                    <input
                      type="text"
                      placeholder="Bank Account Name"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Next of Kin</label>
                    <input
                      type="text"
                      placeholder="Next of Kin"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Next of Kin Phone No</label>
                    <input
                      type="number"
                      placeholder="Next of Kin Phone Number"
                      class="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label class="form-label">Contact Address</label>
                    <input
                      type="text"
                      placeholder="Contact Address"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">BVN</label>
                    <input
                      type="number"
                      placeholder="BVN"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Marital Status</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Select Account Officer In Charge</option>
                      <option>Esther Komolafe</option>
                      <option>Chisom Ogbonna</option>
                      <option>Amaka Okoye</option>
                    </select>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
