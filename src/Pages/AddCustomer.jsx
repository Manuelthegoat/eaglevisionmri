import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../Components/Loader/Loader'

const AddCustomer = () => {
  const [accountHolderName, setAccountHolderName] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [sex, setSex] = useState("");
  const [passport, setPassport] = useState(null);
  const [phone, setPhone] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [spousePhone, setSpousePhone] = useState("");
  const [identificationMeans, setIdentificationMeans] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [nextOfKinPhone, setNextOfKinPhone] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [bvn, setBvn] = useState("");
  const [accountOfficer, setAccountOfficer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: accountHolderName,
      dateOfBirth: dob,
      occupation: occupation,
      placeOfBirth: placeOfBirth,
      sex: sex,
      customersPhoneNo: phone,
      maritalStatus: maritalStatus,
      spouseName: spouseName,
      spousePhoneNo: spousePhone,
      meansOfIdentification: identificationMeans,
      meansOfIdentificationNumber: idNumber,
      bankName: bankName,
      bankAccountNo: bankAccountNo,
      bankAccountName: bankAccountName,
      nextOfKin: nextOfKin,
      nextOfKinPhone: nextOfKinPhone,
      contactAddress: contactAddress,
      bvn: bvn,
    };

    try {
      const response = await fetch(
        "https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/customer",
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
      toast.success("Customer Added Successfully");
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      toast.error("An Error Occurred");
    }
  };

  return (
    <div>
      <ToastContainer />
      {loading && <Loader /> }
      <div class="col-xl-12 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Add Customer</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Account Holder's Name:</label>
                    <input
                      type="text"
                      value={accountHolderName}
                      onChange={(e) => setAccountHolderName(e.target.value)}
                      class="form-control"
                      placeholder="Applicants Full Name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Occupation</label>
                    <input
                      type="text"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      className="form-control"
                      placeholder="Occupation"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label>Place Of Birth</label>
                    <input
                      type="text"
                      value={placeOfBirth}
                      onChange={(e) => setPlaceOfBirth(e.target.value)}
                      className="form-control"
                      placeholder="Place Of Birth"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Sex</label>
                    <select
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                      className="default-select form-control wide"
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Passport</label>
                    <input
                      type="file"
                      onChange={(e) => setPassport(e.target.files[0])}
                      className="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Customer's Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Customer's Phone"
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Marital Status</label>
                    <select
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      className="default-select form-control wide"
                    >
                      <option value="" disabled>
                        Select One
                      </option>
                      <option value={"single"}>Single</option>
                      <option value={"married"}>Married</option>
                      <option value={"divorced"}>Divorced</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Name</label>
                    <input
                      type="text"
                      value={spouseName}
                      onChange={(e) => setSpouseName(e.target.value)}
                      placeholder="Spouse Name"
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Spouse Phone No</label>
                    <input
                      type="text"
                      value={spousePhone}
                      onChange={(e) => setSpousePhone(e.target.value)}
                      placeholder="Spouse Phone No"
                      className="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Means of Identification</label>
                    <select
                      value={identificationMeans}
                      onChange={(e) => setIdentificationMeans(e.target.value)}
                      className="default-select form-control wide"
                    >
                      <option value="" disabled>
                        Intl Passport, drivers license etc...
                      </option>
                      <option value={"intl passport"}>
                        International Passport
                      </option>
                      <option value={"nin"}>NIN</option>
                      <option value={"voters card"}>Voter's Card</option>
                      <option value={"others"}>Others</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">
                      Means of Identification Number: (if others, enter ID name
                      and ID number)
                    </label>
                    <input
                      type="text"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      placeholder="Intl Passport, drivers license Number etc..."
                      className="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Bank Name</label>
                    <input
                      type="text"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      placeholder="Bank Name"
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Bank Account No</label>
                    <input
                      type="text"
                      value={bankAccountNo}
                      onChange={(e) => setBankAccountNo(e.target.value)}
                      placeholder="Bank Account Number"
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label class="form-label">Bank Account Name</label>
                    <input
                      type="text"
                      value={bankAccountName}
                      onChange={(e) => setBankAccountName(e.target.value)}
                      placeholder="Bank Account Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Next of Kin</label>
                    <input
                      type="text"
                      value={nextOfKin}
                      onChange={(e) => setNextOfKin(e.target.value)}
                      placeholder="Next of Kin"
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Next of Kin Phone No</label>
                    <input
                      type="text"
                      value={nextOfKinPhone}
                      onChange={(e) => setNextOfKinPhone(e.target.value)}
                      placeholder="Next of Kin Phone Number"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label class="form-label">Contact Address</label>
                    <input
                      type="text"
                      value={contactAddress}
                      onChange={(e) => setContactAddress(e.target.value)}
                      placeholder="Contact Address"
                      className="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label class="form-label">BVN</label>
                    <input
                      type="text"
                      value={bvn}
                      onChange={(e) => setBvn(e.target.value)}
                      placeholder="BVN"
                      className="form-control"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label class="form-label">Officer in charge</label>
                    <select
                      value={accountOfficer}
                      onChange={(e) => setAccountOfficer(e.target.value)}
                      className="default-select form-control wide"
                    >
                      <option value="" disabled>
                        Select Account Officer In Charge
                      </option>
                      <option>Esther Komolafe</option>
                      <option>Chisom Ogbonna</option>
                      <option>Amaka Okoye</option>
                    </select>
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

export default AddCustomer;
