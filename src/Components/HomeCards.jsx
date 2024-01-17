import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import ReactApexChart from "react-apexcharts";

const chartData = {
  series: [
    {
      name: "Active",
      data: [50, 90, 90],
      radius: 12,
    },
    {
      name: "InActive",
      data: [50, 60, 55],
    },
  ],
  chart: {
    type: "bar",
    height: 120,

    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      endingShape: "rounded",
      borderRadius: 8,
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  colors: ["#F8B940", "#FFFFFF"],
  dataLabels: {
    enabled: false,
    offsetY: -30,
  },

  legend: {
    show: false,
    fontSize: "12px",
    labels: {
      colors: "#000000",
    },
    markers: {
      width: 18,
      height: 18,
      strokeWidth: 8,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 12,
    },
  },
  stroke: {
    show: true,
    width: 14,
    curve: "smooth",
    lineCap: "round",
    colors: ["transparent"],
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY"],
    labels: {
      show: false,
      style: {
        colors: "#A5AAB4",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "poppins",
        cssClass: "apexcharts-xaxis-label",
      },
    },
    crosshairs: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
      offsetX: -16,
      style: {
        colors: "#000000",
        fontSize: "13px",
        fontFamily: "poppins",
        fontWeight: 100,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
};
const expensesdata = {
  series: [
    {
      name: "Running",
      data: [40, 80, 70],
      //radius: 12,
    },
    {
      name: "Cycling",
      data: [60, 30, 70],
    },
  ],
  chart: {
    type: "bar",
    height: 120,

    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      endingShape: "rounded",
      borderRadius: 8,
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  colors: ["#FFFFFF", "#222B40"],
  dataLabels: {
    enabled: false,
    offsetY: -30,
  },

  legend: {
    show: false,
    fontSize: "12px",
    labels: {
      colors: "#000000",
    },
    markers: {
      width: 18,
      height: 18,
      strokeWidth: 8,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 12,
    },
  },
  stroke: {
    show: true,
    width: 14,
    curve: "smooth",
    lineCap: "round",
    colors: ["transparent"],
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY"],
    labels: {
      show: false,
      style: {
        colors: "#A5AAB4",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "poppins",
        cssClass: "apexcharts-xaxis-label",
      },
    },
    crosshairs: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
      offsetX: -16,
      style: {
        colors: "#000000",
        fontSize: "13px",
        fontFamily: "poppins",
        fontWeight: 100,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
};
const deposit = {
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
      /* radius: 30,	 */
    },
  ],
  chart: {
    type: "area",
    height: 40,
    //width: 400,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },

  colors: ["var(--primary)"],
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    show: true,
    width: 2,
    curve: "straight",
    colors: ["var(--primary)"],
  },

  grid: {
    show: false,
    borderColor: "#eee",
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: -1,
    },
  },
  states: {
    normal: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    hover: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
        value: 0,
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "August",
      "Sept",
      "Oct",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      style: {
        fontSize: "12px",
      },
    },
    crosshairs: {
      show: false,
      position: "front",
      stroke: {
        width: 1,
        dashArray: 3,
      },
    },
    tooltip: {
      enabled: true,
      formatter: undefined,
      offsetY: 0,
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 0.9,
    colors: "var(--primary)",
    type: "gradient",
    gradient: {
      colorStops: [
        {
          offset: 0,
          color: "var(--primary)",
          opacity: 0.5,
        },
        {
          offset: 0.6,
          color: "var(--primary)",
          opacity: 0.5,
        },
        {
          offset: 100,
          color: "white",
          opacity: 0,
        },
      ],
    },
  },
  tooltip: {
    enabled: false,
    style: {
      fontSize: "12px",
    },
    y: {
      formatter: function (val) {
        return "$" + val + " thousands";
      },
    },
  },
};
const HomeCards = () => {
  const [customerss, setCustomerss] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalDepositTf, setTotalDepositTf] = useState([]);
  const [totalWitdrawal, setTotalWithdrawal] = useState([]);
  const [totalWitdrawalssss, setTotalWithdrawalssss] = useState([]);

  useEffect(() => {
    fetch("https://eaglevision.onrender.com/api/v1/customers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.data);
        setCustomerss(data.data);
        const totalBalance = data.data.reduce(
          (sum, customer) => sum + customer.accountBalance,
          0
        );
        setTotalDeposit(totalBalance);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);
  useEffect(() => {
    fetch(
      "https://eaglevision.onrender.com/api/v1/transactions/withdrawalsByPaymentDate?startDate=2000-10-01&endDate=2099-10-31"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.data);
        setTotalWithdrawal(data.data);
        const totalWitdrawalss = data.data.reduce(
          (sum, customer) => sum + customer.amount,
          0
        );
        setTotalWithdrawalssss(totalWitdrawalss);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);
  useEffect(() => {
    fetch(
      "https://eaglevision.onrender.com/api/v1/transactions/totalDepositByCashByPaymentDate?startDate=2023-01-01&endDate=2023-12-31"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.data);
        setCustomers(data.data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);
  useEffect(() => {
    fetch(
      "https://eaglevision.onrender.com/api/v1/transactions/totalDepositByTransferByPaymentDate?startDate=2023-01-01&endDate=2023-12-31"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.data);
        setTotalDepositTf(data.data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setLoading(false)); // Set loading to false here, after success or error
  }, []);
  function safeSumAndFormat(a, b) {
    const numberA = parseFloat(a);
    const numberB = parseFloat(b);

    if (!isNaN(numberA) && !isNaN(numberB)) {
      return (numberA + numberB)?.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    return "N/A"; // or some other default value if the conversion fails
  }
  return (
    <div>
      {loading && <Loader />}
      <div class="col-xl-12">
        <div class="row">
          <a href="/customers-list" class="col-xl-4 col-sm-4">
            <div class="card bg-primary text-white">
              <div class="card-header border-0 flex-wrap">
                <div class="revenue-date">
                  <span>All Customers</span>
                  <h4 class="text-white">{customerss.length}</h4>
                </div>
              </div>
              <div class="card-body pb-0 custome-tooltip d-flex align-items-center">
                {/* <div id="chartBar" class="chartBar"></div> */}
                <ReactApexChart
                  options={chartData}
                  series={chartData.series}
                  width={500}
                  height={150}
                  class="chartBar"
                  type="bar"
                />
              </div>
            </div>
          </a>
          <a href="/customers-list" class="col-xl-4 col-sm-4">
            <div class="card bg-secondary text-white">
              <div class="card-header border-0">
                <div class="revenue-date">
                  <span class="text-black">Active Customers</span>
                  <h4 class="text-black">{customerss.length}</h4>
                </div>
              </div>
              <div class="card-body pb-0 custome-tooltip d-flex align-items-center">
                {/* <div id="expensesChart" class="chartBar"></div> */}
                <ReactApexChart
                  options={expensesdata}
                  series={expensesdata.series}
                  width={500}
                  height={150}
                  class="chartBar"
                  type="bar"
                />
              </div>
            </div>
          </a>
          {/* <div class="col-xl-4 col-sm-4">
            <div class="card">
              <div class="card-body depostit-card">
                <div class="depostit-card-media d-flex justify-content-between style-1">
                  <div>
                    <h6>Tasks Not Finisheds</h6>
                    <h3>20</h3>
                  </div>
                  <div class="icon-box bg-secondary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3_566)">
                        <path
                          opacity="0.3"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 3V3.5C8 4.32843 8.67157 5 9.5 5H14.5C15.3284 5 16 4.32843 16 3.5V3H18C19.1046 3 20 3.89543 20 5V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V5C4 3.89543 4.89543 3 6 3H8Z"
                          fill="#222B40"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.875 15.75C10.6354 15.75 10.3958 15.6542 10.2042 15.4625L8.2875 13.5458C7.90417 13.1625 7.90417 12.5875 8.2875 12.2042C8.67083 11.8208 9.29375 11.8208 9.62917 12.2042L10.875 13.45L14.0375 10.2875C14.4208 9.90417 14.9958 9.90417 15.3792 10.2875C15.7625 10.6708 15.7625 11.2458 15.3792 11.6292L11.5458 15.4625C11.3542 15.6542 11.1146 15.75 10.875 15.75Z"
                          fill="#222B40"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2H14.5C14.7761 2 15 2.22386 15 2.5V3.5C15 3.77614 14.7761 4 14.5 4H9.5C9.22386 4 9 3.77614 9 3.5V2.5C9 2.22386 9.22386 2 9.5 2H11Z"
                          fill="#222B40"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_566">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="progress-box mt-0">
                  <div class="d-flex justify-content-between">
                    <p class="mb-0">Complete Task</p>
                    <p class="mb-0">20/28</p>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-secondary"
                      style={{
                        width: "50%",
                        height: "5px",
                        "border-radius": "4px",
                      }}
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div class="col-xl-4 col-sm-4">
            <div class="card same-card">
              <div class="card-body depostit-card p-0">
                <div class="depostit-card-media d-flex justify-content-between pb-0">
                  <div>
                    <h6>Total Deposit</h6>
                    <h3>
                      &#8358;{" "}
                      {safeSumAndFormat(
                        customers.totalDepositAmount,
                        totalDepositTf.totalDepositAmount
                      )}
                    </h3>
                  </div>
                  <div class="icon-box bg-primary">
                    <svg
                      width="12"
                      height="20"
                      viewBox="0 0 12 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
                {/* <div id="NewExperience"></div> */}
                <ReactApexChart
                  options={deposit}
                  series={deposit.series}
                  //   width={300}
                  height={120}
                  //   class="chartBar"
                  type="area"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-4">
            <div class="card same-card">
              <div class="card-body depostit-card p-0">
                <div class="depostit-card-media d-flex justify-content-between pb-0">
                  <div>
                    <h6>Total Withdrawals</h6>
                    <h3>
                      &#8358;{" "}
                      {totalWitdrawalssss}
                    </h3>
                  </div>
                  <div class="icon-box bg-primary">
                    <svg
                      width="12"
                      height="20"
                      viewBox="0 0 12 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
                {/* <div id="NewExperience"></div> */}
                <ReactApexChart
                  options={deposit}
                  series={deposit.series}
                  //   width={300}
                  height={120}
                  //   class="chartBar"
                  type="area"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
