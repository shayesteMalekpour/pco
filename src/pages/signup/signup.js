import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";

function Signup() {
  const context = useContext(AppSettings);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");

    return function cleanUp() {
      context.setAppHeaderNone(false);
      context.setAppSidebarNone(false);
      context.setAppContentClass("");
    };

    // eslint-disable-next-line
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login">
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Sign Up</h1>
          <div className="mb-3">
            <label className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg bg-white bg-opacity-5"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Username <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg bg-white bg-opacity-5"
              placeholder=""
            />
          </div>
         
          <button
            type="submit"
            className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
