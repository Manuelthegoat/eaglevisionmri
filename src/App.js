import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import NavHeader from "./Components/NavHeader";
import Routing from "./Routes";

function App() {
  return (
    <div id="main-wrapper">
      <NavHeader />
      <Header />
      <Sidebar />
      <div class="content-body">
        <div class="container-fluid">
          {/* ========  START Route ========= */}
          <Routing />
        </div>
      </div>
      <div class="footer">
        <div class="copyright">
          <p>
            Copyright © 2023 Eagle Vision || Developed by{" "}
            <a href="https://techmint.africa/" target="_blank">
              Techmint
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
