import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch("https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customer")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.data);
        toast.success("Customer Fetched Successfully");
        setCustomers(data.data);
      })
      .catch((error) => console.log("Error fetching data: ", error))
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);
  const deleteCustomer = (customerId) => {
    setDeleting(true);
    fetch(
      `https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customer/${customerId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // If successfully deleted from backend, remove from local state
        const updatedCustomers = customers.filter(
          (customer) => customer._id !== customerId
        );
        toast.success("Customer Deleted Successfully");
        setCustomers(updatedCustomers);
      })
      .catch((error) => console.log("Error deleting customer: ", error))
      .finally(() => {
        // Hide loader
        setDeleting(false);
      });
  };

  return (
    <>
      {loading && <Loader />}
      {deleting && <Loader />}
      <ToastContainer />
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
                  {customers.map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.name}</td>

                      <td>EV{customer?._id?.substring(0, 9)}</td>
                      <td>{customer.customersPhoneNo}</td>
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
                            <Link
                              to={`/customer-available-balance/${customer._id}`}
                              class="dropdown-item"
                            >
                              View Details
                            </Link>

                            <a class="dropdown-item" href="#">
                              Edit
                            </a>
                            <a
                              class="dropdown-item"
                              onClick={() => deleteCustomer(customer._id)}
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
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
