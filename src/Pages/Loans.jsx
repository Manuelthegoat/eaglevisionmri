import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
const Loans = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDeposit, setTotalDeposit] = useState(0);

  useEffect(() => {
    fetch("https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.data);
        setCustomers(data.data);
        const totalBalance = data.data.reduce((sum, customer) => sum + customer.balance, 0);
        setTotalDeposit(totalBalance);
       
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);
  return (
    <>
    {loading && <Loader />}
      <div className="row">
        <div class="col-xl-4 col-xxl-4 col-sm-6">
          <div class="card crm-cart bg-secondary border-0">
            <div class="card-header border-0 pb-0">
              <span class="text-white fs-16">
              Count: {customers.length}<i class="fa-solid fa-chevron-up ms-1"></i>
              </span>
              <div class="icon-box bg-white">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="var(--primary)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p>{customers.length}</p>
                <span class="d-block mb-3 text-black">All Loan Customers</span>
                <span class="badge bg-white text-black border-0">
                  Last 4 Month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-4 col-sm-6">
          <div class="card crm-cart bg-secondary border-0">
            <div class="card-header border-0 pb-0">
              <span class="text-white fs-16">
              Count: {customers.length}<i class="fa-solid fa-chevron-up ms-1"></i>
              </span>
              <div class="icon-box bg-white">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="var(--primary)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p>&#8358; {totalDeposit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <span class="d-block mb-3 text-black">All Approved(Current Loan)</span>
                <span class="badge bg-white text-black border-0">
                  Last 4 Month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-4 col-sm-4">
          <div class="card crm-cart bg-primary border-0">
            <div class="card-header border-0 pb-0">
              <span class="text-white fs-16">
              Count: 0<i class="fa-solid fa-chevron-up ms-1"></i>
              </span>
              <div class="icon-box bg-white">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="var(--primary)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p class="text-white">&#8358; 0</p>
                <span class="d-block mb-3 text-white">
                All Pending
                </span>
                <span class="badge bg-white text-black border-0">
                  Last 6 Month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-xl-4 col-xxl-4 col-sm-6">
          <div class="card crm-cart bg-secondary border-0">
            <div class="card-header border-0 pb-0">
              <span class="text-white fs-16">
              Count: 0<i class="fa-solid fa-chevron-up ms-1"></i>
              </span>
              <div class="icon-box bg-white">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="var(--primary)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p>&#8358; 0</p>
                <span class="d-block mb-3 text-black">All Declined</span>
                <span class="badge bg-white text-black border-0">
                  Last 4 Month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-4 col-sm-6">
          <div class="card crm-cart bg-secondary border-0">
            <div class="card-header border-0 pb-0">
              <span class="text-white fs-16">
              Count: 546<i class="fa-solid fa-chevron-up ms-1"></i>
              </span>
              <div class="icon-box bg-white">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="var(--primary)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p>&#8358; 285,557,443.0</p>
                <span class="d-block mb-3 text-black">All Repayments</span>
                <span class="badge bg-white text-black border-0">
                  Last 4 Month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-4 col-sm-4">
          <div class="card crm-cart bg-primary border-0">
            <div class="card-header border-0 pb-0">
              <span class="text-white fs-16">
              roi:₦ 64,025,500.0<i class="fa-solid fa-chevron-up ms-1"></i>
              </span>
              <div class="icon-box bg-white">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="var(--primary)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="card-body">
              <div class="crm-cart-data">
                <p class="text-white">&#8358; 350,965,500.0</p>
                <span class="d-block mb-3 text-white">
                Total ROI Amount
                </span>
                <span class="badge bg-white text-black border-0">
                  Last 6 Month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loans
