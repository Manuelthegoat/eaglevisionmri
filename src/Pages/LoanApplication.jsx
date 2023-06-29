import React from "react";

const LoanApplication = () => {
  return (
    <>
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Loan Application Form</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Search and Select Customer</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Select Customer</option>
                      <option>Onuchukwu Thompson</option>
                      <option>Eunice Onyeka</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Loan Title</label>
                    <input
                      type="text"
                      placeholder="loan Title"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Phone NO 1</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone NO 1"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label>Phone NO 2</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone NO 2"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-12">
                    <label class="form-label">House Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="House Address"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label class="form-label">Office Address</label>
                    <input
                      type="text"
                      placeholder="Office Address"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
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
                  <div class="mb-3 col-md-6">
                    <label class="form-label">
                      Current Occupation Of Applicant
                    </label>
                    <input
                      type="text"
                      placeholder="Current Occupation Of Applicant"
                      class="form-control"
                    />
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
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Occupation</label>
                    <input
                      type="text"
                      placeholder="Spouse Occupation"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Office Address</label>
                    <input
                      type="text"
                      placeholder="Spouse Office Address"
                      class="form-control"
                    />
                  </div>
                </div>
                <h3>LOAN REQUEST DETAILS</h3>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">LOAN REQUESTED AMOUNT</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text border-0">&#8358;</span>
                      <input type="number" class="form-control" />
                    </div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">LOAN TENURE/DURATION</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Nothing Selected</option>
                      <option>1 Month (30 Days)</option>
                      <option>2 Month (60 Days)</option>
                      <option>3 Month (90 Days)</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-4">
                    <label class="form-label">LOAN START DATE</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">LOAN END DATE</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">REPAYMENT SCHEDULE</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option selected>Nothing Selected</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>BiWeekly</option>
                      <option>Monthly</option>
                      <option>Quaterly</option>
                      <option>BiAnnually</option>
                      <option>Annually</option>
                    </select>
                  </div>
                </div>
                <h3>GUARANTORS' DETAILS</h3>
                <h3>FIRST GUARANTOR'S DETAILS</h3>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">GUARANTOR'S Name</label>
                    <input
                      type="text"
                      placeholder="GUARANTOR'S Name"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Sex</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Date Of Birth</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Occupation</label>
                    <input
                      type="text"
                      placeholder="Occupation"
                      class="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label class="form-label">House Address</label>
                    <input
                      type="text"
                      placeholder="House Address"
                      class="form-control"
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label class="form-label">Office Address</label>
                    <input
                      type="text"
                      placeholder="House Address"
                      class="form-control"
                    />
                  </div>
                </div>
               
                <h3>SECOND GUARANTOR'S DETAILS</h3>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">GUARANTOR'S Name</label>
                    <input
                      type="text"
                      placeholder="GUARANTOR'S Name"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Sex</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Date Of Birth</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Occupation</label>
                    <input
                      type="text"
                      placeholder="Occupation"
                      class="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label class="form-label">House Address</label>
                    <input
                      type="text"
                      placeholder="House Address"
                      class="form-control"
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label class="form-label">Office Address</label>
                    <input
                      type="text"
                      placeholder="House Address"
                      class="form-control"
                    />
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
    </>
  );
};

export default LoanApplication;
