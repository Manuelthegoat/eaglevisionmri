import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const onPress = async () => {
    try {
      const response = await fetch(
        "https://cute-teal-clownfish-belt.cyclic.cloud/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            roles: role,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        toast.success("Login Successfull");
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", data.data.user.fullName);
        window.location.reload();
      } else {
        console.error("Login failed", data.message);
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
      toast.error("Login failed");
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        class="vh-100"
        style={{
          "background-image": "url('images/bg.png')",
          "background-position": "center",
        }}
      >
        <div class="authincation h-100">
          <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
              <div class="col-md-6">
                <div class="authincation-content">
                  <div class="row no-gutters">
                    <div class="col-xl-12">
                      <div class="auth-form">
                        <div class="text-center mb-3">
                          <a>
                            <img src="./images/logo/logofull.png" alt="" />
                          </a>
                        </div>
                        <h4 class="text-center mb-4">
                          Sign in to your account
                        </h4>
                        <div>
                          <div class="mb-3">
                            <label class="mb-1">
                              <strong>Email</strong>
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              class="form-control"
                              placeholder="hello@example.com"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="mb-1">
                              <strong>Password</strong>
                            </label>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              class="form-control"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="mb-1">
                              <strong>Role</strong>
                            </label>
                            <select
                              id="inputState"
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              class="default-select form-control wide"
                            >
                              <option selected>Select Role</option>
                              <option value={"dpo"}>Dpo</option>
                              <option value={"accountOfficer"}>
                                Account Officer
                              </option>
                              <option value={"assistantManager"}>
                                Assistant Manager
                              </option>
                            </select>
                          </div>
                          <div class="text-center mt-4">
                            <button
                              class="btn btn-primary btn-block"
                              onClick={onPress}
                            >
                              Sign me In
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
