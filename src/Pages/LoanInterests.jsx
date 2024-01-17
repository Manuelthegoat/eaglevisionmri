import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";

const LoanInterests = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://eaglevision.onrender.com/api/v1/loans"
        );
        const data = await response.json();

        setLoans(data.data);
        const promises = data.data?.map(async (loan) => {
          const customerId = loan.customer;
          if (customerId) {
            const customerResponse = await fetch(
              `https://eaglevision.onrender.com/api/v1/customers/${customerId}`
            );
            const customerData = await customerResponse.json();
            return customerData.data;
          }
          return null;
        });

        // Wait for all customer details to be fetched
        const customerResults = await Promise.all(promises);
        setCustomerData(customerResults);
        toast.success("Fetched All");
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Failed to fetch loan data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      <div className="card">
        <div className="card-header">
          <h4 class="card-title">Loan Interests</h4>
        </div>
        <div className="card-body">
          <div class="table-responsive">
            <table class="table table-responsive-md">
              <thead>
                <tr>
                  <th>
                    <strong>NAME</strong>
                  </th>
                  <th>
                    <strong>Interest Amount</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loans.map((item, index) => (
                  <tr>
                    <td>
                      {customerData ? (
                        <>{customerData[index]?.name}</>
                      ) : (
                        "Loading customer data..."
                      )}
                    </td>
                    <td>{item.interestRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanInterests;
