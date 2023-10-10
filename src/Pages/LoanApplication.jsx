import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoanApplication = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [customerSelection, setCustomerSelection] = useState("");
  const [loanTitle, setLoanTitle] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [currentOccupation, setCurrentOccupation] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [spousePhone, setSpousePhone] = useState("");
  const [spouseOccupation, setSpouseOccupation] = useState("");
  const [spouseOfficeAddress, setSpouseOfficeAddress] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [loanStartDate, setLoanStartDate] = useState(null);
  const [loanEndDate, setLoanEndDate] = useState(null);
  const [repaymentSchedule, setRepaymentSchedule] = useState("");
  const [guarantor1Name, setGuarantor1Name] = useState("");
  const [guarantor1Sex, setGuarantor1Sex] = useState("");
  const [guarantor1Dob, setGuarantor1Dob] = useState(null);
  const [guarantor1Phone, setGuarantor1Phone] = useState("");
  const [guarantor1Occupation, setGuarantor1Occupation] = useState("");
  const [guarantor1HouseAddress, setGuarantor1HouseAddress] = useState("");
  const [guarantor1OfficeAddress, setGuarantor1OfficeAddress] = useState("");
  const [guarantor2Name, setGuarantor2Name] = useState("");
  const [guarantor2Sex, setGuarantor2Sex] = useState("");
  const [guarantor2Dob, setGuarantor2Dob] = useState(null);
  const [guarantor2Phone, setGuarantor2Phone] = useState("");
  const [guarantor2Occupation, setGuarantor2Occupation] = useState("");
  const [guarantor2HouseAddress, setGuarantor2HouseAddress] = useState("");
  const [guarantor2OfficeAddress, setGuarantor2OfficeAddress] = useState("");

  useEffect(() => {
    fetch("https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customers")
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
      .catch((error) => {
        console.log("Error fetching data: ", error);
        toast.error("Customer Failed To Fetched");
      })
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behaviour

    // Combine all the useState data into one object
    const payload = {
      customerId: customerSelection,
      amount: loanAmount,
      interestRate: 10,
      loanStartDate: loanStartDate,
      loanEndDate: loanEndDate,
      repaymentSchedule: repaymentSchedule,
      repaymentDate: loanEndDate,
      loanTitle: loanTitle,
      phoneNo1: phone1,
      phoneNo2: phone2,
      houseAddress: houseAddress,
      officeAddress: officeAddress,
      maritalStatus: maritalStatus,
      currentOccupationOfApplicant: currentOccupation,
      spouseName: spouseName,
      spousePhoneNo: spousePhone,
      spouseOccupation: spouseOccupation,
      spouseOfficeAddress: spouseOfficeAddress,
      loanDuration: loanDuration,
      LoanRequestedAmount: loanAmount,
      firstGuarantorsName: guarantor1Name,
      firstGuarantorsSex: guarantor1Sex,
      firstGuarantorsDateOfBirth: guarantor1Dob,
      firstGuarantorsPhoneNumber: guarantor1Phone,
      firstGuarantorsOccupation: guarantor1Occupation,
      firstGuarantorsHouseAddress: guarantor1HouseAddress,
      firstGuarantorsOfficeAddress: guarantor1OfficeAddress,
      secondGuarantorsName: guarantor2Name,
      secondGuarantorsSex: guarantor2Sex,
      secondGuarantorsDateOfBirth: guarantor2Dob,
      secondGuarantorsPhoneNumber: guarantor2Phone,
      secondGuarantorsOccupation: guarantor2Occupation,
      secondGuarantorsHouseAddress: guarantor2HouseAddress,
      secondGuarantorsOfficeAddress: guarantor2OfficeAddress,
    };

    try {
      const response = await fetch(
        "https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/loans/disbursement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload), // Convert the JavaScript object to a JSON string
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Handle successful post, maybe set a success message or redirect user
      toast.success("Application Submitted Successfully!");
    } catch (error) {
      // Handle errors, maybe display a message to the user
      console.error("There was a problem with the fetch operation:", error);
      
      toast.error("An existing loan already exists for this customer or Network Error");
    }
  };
  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Loan Application Form</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Search and Select Customer</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                      value={customerSelection}
                      onChange={(e) => setCustomerSelection(e.target.value)}
                    >
                      <option selected>Select Customer</option>
                      {customers.map((customer, index) => (
                        <>
                          <option value={customer._id}>{customer.name}</option>
                        </>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Loan Title</label>
                    <input
                      type="text"
                      value={loanTitle}
                      onChange={(e) => setLoanTitle(e.target.value)}
                      placeholder="loan Title"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Phone NO 1</label>
                    <input
                      type="number"
                      class="form-control"
                      value={phone1}
                      onChange={(e) => setPhone1(e.target.value)}
                      placeholder="Phone NO 1"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label>Phone NO 2</label>
                    <input
                      type="number"
                      class="form-control"
                      value={phone2}
                      onChange={(e) => setPhone2(e.target.value)}
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
                      value={houseAddress}
                      onChange={(e) => setHouseAddress(e.target.value)}
                      placeholder="House Address"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label class="form-label">Office Address</label>
                    <input
                      type="text"
                      placeholder="Office Address"
                      value={officeAddress}
                      onChange={(e) => setOfficeAddress(e.target.value)}
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
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option selected>Select One</option>
                      <option value={"single"}>Single</option>
                      <option value={"married"}>Married</option>
                      <option value={"divorced"}>Divorced</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">
                      Current Occupation Of Applicant
                    </label>
                    <input
                      type="text"
                      value={currentOccupation}
                      onChange={(e) => setCurrentOccupation(e.target.value)}
                      placeholder="Current Occupation Of Applicant"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Name</label>
                    <input
                      type="text"
                      placeholder="Spouse Name"
                      value={spouseName}
                      onChange={(e) => setSpouseName(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Phone No</label>
                    <input
                      type="number"
                      value={spousePhone}
                      onChange={(e) => setSpousePhone(e.target.value)}
                      placeholder="Spouse Phone No"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Occupation</label>
                    <input
                      type="text"
                      placeholder="Spouse Occupation"
                      value={spouseOccupation}
                      onChange={(e) => setSpouseOccupation(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Office Address</label>
                    <input
                      type="text"
                      placeholder="Spouse Office Address"
                      value={spouseOfficeAddress}
                      onChange={(e) => setSpouseOfficeAddress(e.target.value)}
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
                      <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">LOAN TENURE/DURATION</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                      value={loanDuration}
                      onChange={(e) => setLoanDuration(e.target.value)}
                    >
                      <option selected>Nothing Selected</option>
                      <option value={"onemonth"}>1 Month (30 Days)</option>
                      <option value={"twomonths"}>2 Month (60 Days)</option>
                      <option value={"threemonths"}>3 Month (90 Days)</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-4">
                    <label class="form-label">LOAN START DATE</label>
                    <input
                      type="date"
                      value={loanStartDate}
                      onChange={(e) => setLoanStartDate(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">LOAN END DATE</label>
                    <input
                      type="date"
                      class="form-control"
                      value={loanEndDate}
                      onChange={(e) => setLoanEndDate(e.target.value)}
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">REPAYMENT SCHEDULE</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                      value={repaymentSchedule}
                      onChange={(e) => setRepaymentSchedule(e.target.value)}
                    >
                      <option selected>Nothing Selected</option>
                      <option value={"daily"}>Daily</option>
                      <option value={"weekly"}>Weekly</option>
                      <option value={"bi-weekly"}>BiWeekly</option>
                      <option value={"monthly"}>Monthly</option>
                      <option value={"quaterly"}>Quaterly</option>
                      <option value={"bi-anually"}>BiAnnually</option>
                      <option value={"anually"}>Annually</option>
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
                      value={guarantor1Name}
                      onChange={(e) => setGuarantor1Name(e.target.value)}
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Sex</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                      value={guarantor1Sex}
                      onChange={(e) => setGuarantor1Sex(e.target.value)}
                    >
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Date Of Birth</label>
                    <input
                      type="date"
                      value={guarantor1Dob}
                      onChange={(e) => setGuarantor1Dob(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      value={guarantor1Phone}
                      onChange={(e) => setGuarantor1Phone(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Occupation</label>
                    <input
                      type="text"
                      value={guarantor1Occupation}
                      onChange={(e) => setGuarantor1Occupation(e.target.value)}
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
                      value={guarantor1HouseAddress}
                      onChange={(e) =>
                        setGuarantor1HouseAddress(e.target.value)
                      }
                      class="form-control"
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label class="form-label">Office Address</label>
                    <input
                      type="text"
                      placeholder="House Address"
                      value={guarantor1OfficeAddress}
                      onChange={(e) =>
                        setGuarantor1OfficeAddress(e.target.value)
                      }
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
                      value={guarantor2Name}
                      onChange={(e) => setGuarantor2Name(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Sex</label>
                    <select
                      id="inputState"
                      class="default-select form-control wide"
                      value={guarantor2Sex}
                      onChange={(e) => setGuarantor2Sex(e.target.value)}
                    >
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Date Of Birth</label>
                    <input
                      type="date"
                      value={guarantor2Dob}
                      onChange={(e) => setGuarantor2Dob(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      value={guarantor2Phone}
                      onChange={(e) => setGuarantor2Phone(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Occupation</label>
                    <input
                      type="text"
                      placeholder="Occupation"
                      class="form-control"
                      value={guarantor2Occupation}
                      onChange={(e) => setGuarantor2Occupation(e.target.value)}
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
                      value={guarantor2HouseAddress}
                      onChange={(e) =>
                        setGuarantor2HouseAddress(e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label class="form-label">Office Address</label>
                    <input
                      type="text"
                      placeholder="House Address"
                      value={guarantor2OfficeAddress}
                      onChange={(e) =>
                        setGuarantor2OfficeAddress(e.target.value)
                      }
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
