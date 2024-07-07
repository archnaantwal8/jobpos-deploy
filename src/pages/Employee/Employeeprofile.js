import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CustomButton from "../../UIComponent/CustomButton";
import { useSelector } from "react-redux";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  userType: "",
  skills: "",
  location: "",
  lineAddress: "",
  street: "",
  city: "",
  state: "",
  postCode: "",
  country: "",
  _id: "",
};
function EmployeeProfile(props) {
  const authData = useSelector((state) => state.auth);
  const { skillList } = [];
  const userDetail = authData.userData ? authData.userData : defaultValues;
  const [profileDetails, setprofileDetails] = useState(userDetail);


  const updateDetails = () => {
    axios
      .put(
        "http://112.196.98.174:3000/api/v1/user/" + profileDetails._id,
        {
          name: profileDetails.name,
          email: profileDetails.email,
          // phone: profileDetails.phone,
          dob: profileDetails.dob,
          userType: "worker",
          //skills: [profileDetails.skills],
          location: profileDetails.location,
          lineAddress: profileDetails.lineAddress,
          street: profileDetails.street,
          city: profileDetails.city,
          state: profileDetails.state,
          postCode: profileDetails.postCode,
          country: profileDetails.country,
        },
        {
          headers: {
            Authorization: `Bearer ${authData.acesstoken}`,
          },
        }
      )
      .then(function (response) {
        if (response.data.code === 200) {
        } else {
          alert("unable to generate OTP 1");
        }
      })
      .catch(function (error) {
        alert("unable to generate OTP 2");
      });
  };
  const inputHandler = (e) => {
    let inputType = e.target.name;
    let inputValue = e.target.value;
    setprofileDetails((prev) => {
      return {
        ...prev,
        [inputType]: inputValue,
      };
    });
  };

  return (
    <>
      <div className="container-fluid p-5 bg-light">
        <form name="employeedetails">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="uname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    aria-describedby="uname"
                    value={profileDetails.name}
                    name="name"
                    onChange={inputHandler}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                  name="email"
                  value={profileDetails.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phonenumber"
                  aria-describedby="phonenumber"
                  name="phone"
                  disabled
                  value={profileDetails.phone}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  DOB
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dob"
                  aria-describedby="dob"
                  name="dob"
                  value={profileDetails.dob}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  aria-describedby="location"
                  name="location"
                  value={profileDetails.location}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Line Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  aria-describedby="address"
                  name="lineAddress"
                  value={profileDetails.lineAddress}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  aria-describedby="street"
                  name="street"
                  value={profileDetails.street}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  aria-describedby="city"
                  name="city"
                  value={profileDetails.city}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  aria-describedby="state"
                  name="state"
                  value={profileDetails.state}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postcode" className="form-label">
                  Postcode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postcode"
                  aria-describedby="postcode"
                  name="postCode"
                  value={profileDetails.postCode}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  aria-describedby="country"
                  name="country"
                  value={profileDetails.country}
                  onChange={inputHandler}
                />
              </div>

              <div >
                <button
                  type="button"
                  onClick={updateDetails}
                  className="btn btn-primary"
                >
                  Save
                </button>
                <button type="reset" className="btn btn-secondary ms-2">
                  Cancel
                </button>
              </div>

            </div>


            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="skills" className="form-label">
                  Skills
                </label>
                <select className="form-select" multiple>
                  { /* skillList.map((skill) => (
                <option key={skill._id} value={skill._id}>
                  {skill.name}
                </option>
              ))*/ }
                </select>
              </div>


              <div className="mb-3">
                <label htmlFor="occupation" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="occupation"
                  aria-describedby="occupation"
                  name="userType"
                  value={profileDetails.userType}
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default EmployeeProfile;
