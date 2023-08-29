import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader/Loader";

const AddDepositWithdrawal = () => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customers/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Specific Customer Data:", data.data);
        setCustomerDetails(data.data);
      })
      .catch((error) =>
        console.log("Error fetching specific customer data: ", error)
      );
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      amount: amount,
      customerId: customerDetails?._id,
    };
    setLoading(true);

    try {
      const response = await fetch(
        "https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/transactions/deposit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      toast.success("Deposit added");
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      toast.error("An Error Occurred");
    } finally {
      setLoading(false); // <-- stop the loader
    }
  };
  return (
    <div>
      <ToastContainer />
      {loading && <Loader />}
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Add Deposits/Withdrawal</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <div>
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
                    <p>{customerDetails?.name}</p>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
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
                    <input type="date" class="form-control" />
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

                <button onClick={handleSubmit} class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepositWithdrawal;
