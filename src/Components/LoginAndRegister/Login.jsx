import React from "react";

const Login = ({onPress}) => {
  return (
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
										<a ><img src="./images/logo/logofull.png" alt="" /></a>
									</div>
                                    <h4 class="text-center mb-4">Sign up your account</h4>
                                    <div >
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Username</strong></label>
                                            <input type="text" class="form-control" placeholder="username" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" placeholder="hello@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" value="Password" />
                                        </div>
                                        <div class="text-center mt-4">
                                            <button class="btn btn-primary btn-block" onClick={onPress}>Sign me In</button>
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
  );
};

export default Login;
