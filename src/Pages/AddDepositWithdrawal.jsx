import React from "react";

const AddDepositWithdrawal = () => {
  return (
    <div>
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Add Deposits/Withdrawal</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Choose Debit / Credit</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option value="">Debit</option>
                      <option value="">Credit</option>
                    </select>
                  </div>

                  <div class="mb-3 col-md-6">
                    <label class="form-label">Customer</label>
                    <p>0KPE HAPPINESS CHIOMA</p>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Amount</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Amount"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Type</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option value="">Cash</option>
                      <option value="">Transfer</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Collected By</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                    >
                      <option value="">Search and select agent</option>
                      <option value="">Esther Komolafe</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Payment Date</label>
                    <input
                      type="date"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label class="form-label">Description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Description"
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
    </div>
  );
};

export default AddDepositWithdrawal;
