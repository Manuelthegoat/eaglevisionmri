import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import NavHeader from "./Components/NavHeader";
import HomeCards from "./Components/HomeCards";
import FinancesCard from "./Components/FinancesCard";
import Progress from "./Components/Progress";

function App() {
  return (
    <div id="main-wrapper">
      <NavHeader />
      <Header />
      <Sidebar />
      <div class="content-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-9 col-xxl-12">
              <div class="row">
               
                    <HomeCards />
                    <FinancesCard />
                    <Progress />
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
