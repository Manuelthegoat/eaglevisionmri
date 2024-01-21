import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CustomerAvailableBalance = () => {
  const [customerDetails, setCustomerDetails] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const token = localStorage.getItem("token"); 
    fetch(
      `https://eaglevision.onrender.com/api/v1/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
  function capitalizeFirstLetter(word) {
    return word?.charAt(0)?.toUpperCase() + word?.slice(1);
  }
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="profile card card-body px-3 pt-3 pb-0">
            <div class="profile-head">
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
                    <h4 class="text-primary mb-0">
                      Name: {capitalizeFirstLetter(customerDetails?.name)}
                    </h4>
                    <p>Phone: {customerDetails?.customersPhoneNo}</p>
                  </div>
                  <div class="profile-email px-2 pt-2">
                    <p class="text-muted mb-0">
                      Account number: {customerDetails?.accountNumber}
                    </p>
                    <p className="text-muted mb-0">
                      Sex: {customerDetails?.sex}
                    </p>
                  </div>
                  <div class="profile-email px-2 pt-2">
                    <p class="text-muted mb-0">
                      Next of kin: {customerDetails?.nextOfKin}
                    </p>
                    <p className="text-muted mb-0">
                      Next Of Kin Phone Number:{" "}
                      {customerDetails?.nextOfKinPhone}
                    </p>
                  </div>
                  <div class="dropdown ms-auto">
                  <a
                    href="#"
                    class="btn btn-primary light sharp"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                View Profile <i class="fa fa-user-circle text-primary me-2"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <Link to={`/customer-details/${id}`} class="dropdown-item">
                      <i class="fa fa-user-circle text-primary me-2"></i> View
                      Customer Details
                    </Link>
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
                    <a class="btn btn-primary mb-1 me-1">Loans</a>{" "}
                  </div>
                  <div class="col">
                    <a class="btn btn-outline-primary mb-1 me-1">
                      Available Balance
                    </a>{" "}
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
            <div class="card-header d-flex justify-content-center">
              <h4 class="card-title">Available Balance</h4>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive active-projects">
                <div className="rowed"></div>

                <table id="projects-tbl" class="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Amount (N)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SAVINGS BALANCE:</td>

                      <td>₦{customerDetails?.accountBalance}</td>
                    </tr>
                    <tr>
                      <td>ACTIVE LOAN STATUS</td>

                      <td>₦ {customerDetails?.loanBalance}</td>
                    </tr>
                    <tr>
                      <td>Total Approved Amount</td>

                      <td>₦ {customerDetails?.loanBalance}</td>
                    </tr>
                    <tr>
                      <td>Total Repayment Done:</td>

                      <td>₦ 0</td>
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

export default CustomerAvailableBalance;
