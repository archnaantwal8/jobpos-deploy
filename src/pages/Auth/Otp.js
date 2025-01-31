import React, { useEffect, useState } from "react";
import { Form, useLocation, useNavigate, json } from "react-router-dom";
import { otpRegex, validator } from "../../validations/validator";
import { config } from "../../util/Configuration";
import { FormInput } from "../../UIComponent/FormControl";

function OtpSec(props) {
  const [isValidData, setValidData] = useState(false);
  const navigate = useNavigate();
  const locationData = useLocation();
  const phoneNumber =
    locationData.state !== null ? locationData.state.phoneNumber : "";
  useEffect(() => {
    if (!phoneNumber) {
      navigate("/");
    }
  }, [phoneNumber]);

  const inputHandler = (e) => {
    setValidData(validator(otpRegex, e.target.value));
  };
  return (
    <>
      <div className="container pt-3 pb-3">
        <div className="row align-items-center">
          <div className="col-sm-6 text-center">
            <div className="p-5">
              <img src="./slide1.png" alt="slide1" className="img-fluid" />
              <h1 className="h2">Find a perfect job march</h1>
              <p>
                Finding the right job can be a daunting task. But with JobPos,
                we've made it easy.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="bg-light p-5 text-left">
              <h2 className="h4">Enter verification code</h2>
              <Form method="POST">
                <FormInput
                  label="OTP"
                  type="text"
                  id="otp"
                  name="otp"
                  onChange={inputHandler}
                />
                <p>
                  <small className="text-muted">
                    We have sent OTP on your registered number
                  </small>
                </p>
                <input type="hidden" name="phone" defaultValue={phoneNumber} />
                <button
                  disabled={!isValidData}
                  className="btn btn-primary w-100"
                >
                  Verify
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OtpSec;
export const otpAction = async ({ request }) => {
  const formData = await request.formData();
  const response = await fetch(config.otp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: formData.get("phone"),
      otp: formData.get("otp"),
    }),
  });

  if (!response.ok) {
    throw json({ message: "Unable to verify OTP" }, { status: 500 });
  }
  const loginData = await response.json();
  localStorage.setItem("jbToken", loginData.accessToken);
  return {
    success: true,
    userData: loginData.data,
  };
};
