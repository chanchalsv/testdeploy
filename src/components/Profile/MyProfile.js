import React, { useEffect, useState, useRef } from "react";
// import "../Profile/Profile.css";
import { useNavigate } from "react-router-dom";
  import axios from "axios";
import _ from "lodash";

const MyProfile = () => {
  const frmRef = useRef("ProfileForm");
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 
  useEffect(() => {
    try {
      const response = axios.get(
        "http://localhost:8080/api/profile/getprofiledetails"
      );
      console.log("profileData" + response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const submitForm = (e) => {
    const frm = frmRef.current;
    e.preventDefault();
    frm.classList.add("was-validated");
    if (frm.checkValidity() === false) {
      return false;
    }
    setError(false);
    setShowMessage(false);
    let frmdata = new FormData(frm);
    console.log(frmdata);    
    axios
      .post(
        "http://localhost:8080/api/profile/addprofiledetails",
        frmdata
      )
      .then((res) => {
        setShowMessage(true);
      })
      .catch(setError);
  };
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">Your Profile</div>
        <div className="wraper_button_section">
          <button className="add_button" onClick={() => navigate("/dashboard")}>
            {" "}
            <i className="fa-solid fa-plus"></i>Back
          </button>
        </div>
      </div>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-12">
              <form
                ref={frmRef}
                method="post"
                className="needs-validation"
                noValidate
                onSubmit={submitForm}
              >
                <div className="row mx-0 px-0">
                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className=" pb-2 position-relative">
                      <div className="mb-3 upload-img">
                        <label for="formFile" className="form-label ">
                          <div className="updv position-relative">
                            <img
                              className="mainuploadimg "
                              src={"./assets/img/Avatar1.png"}
                              alt=""
                            />
                            <div className="position-absolute eye-class2">
                              <img src="./assets/img/edit.png" />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <div className="position-relative">
                        <input
                          className="form-control profile-input"
                          name="name"
                          placeholder="First name*"
                          type="text"
                          required
                        />

                        <div className="position-absolute eye-class">
                          <img src="./assets/img/edit.png" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <div className="position-relative">
                        <input
                          className="form-control profile-input"
                          name="email"
                          placeholder="Email*"
                          type="text"
                          required
                        />

                        <div className="position-absolute eye-class">
                          <img src="./assets/img/edit.png" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          className="form-control profile-input"
                          name="password"
                          placeholder="Password*"
                          type="text"
                          required
                        />
                        <div className="position-absolute eye-class">
                          <img src="./assets/img/edit.png" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="City"
                      >
                        City
                      </label>
                      <input
                        className="form-control profile-input"
                        name="city"
                        placeholder="City*"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-5 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="State"
                      >
                        State
                      </label>
                      <input
                        className="form-control profile-input"
                        name="state"
                        placeholder="State*"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="Country"
                      >
                        Country
                      </label>
                      <input
                        className="form-control profile-input"
                        name="country"
                        placeholder="Country*"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 px-lg-0 text-end mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary w-sm waves-effect waves-light"
                    >
                      {"Save Changes"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
