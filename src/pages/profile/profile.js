import React from "react";
import { Card, CardHeader, CardBody } from "./../../components/card/card.jsx";
import "lity";
import "lity/dist/lity.min.css";

function Profile() {
  return (
    <Card className="profile-card">
      <CardBody>
        <div className="profile">
          <div className="profile-container">
            <div className="profile-row">
              <div className="profile-avatar">s </div>
              <div>
                <h4>Shay</h4>
                <div>Purchased Tiles: 0Tiles</div>
                <div>Present across: 0Zones</div>
                <div>Balance: Not Connected</div>
              </div>
              {/* <h4>John Smith</h4>
              <div className="mb-3 text-inverse text-opacity-50 fw-bold mt-n2">
                @johnsmith
              </div>
              <p>
                Principal UXUI Design & Brand Architecture for HUD. Creator of
                SeanTheme. Bringing the world closer together. Studied Computer
                Science and Psychology at Harvard University.
              </p>
              <div className="mb-1">
                <i className="fa fa-map-marker-alt fa-fw text-inverse text-opacity-50"></i>{" "}
                New York, NY
              </div>
              <div className="mb-3">
                <i className="fa fa-link fa-fw text-inverse text-opacity-50"></i>{" "}
                seantheme.com/hud
              </div> */}
            </div>{" "}
          </div>{" "}
          <hr className="mt-4 mb-4" />
          <div>
            <h2>Settings</h2>
            <form className="col">
              <div className="col-xl-3">
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="username"
                    placeholder="username"
                    value="Shay"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value="name@example.com"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="email">
                    Referral Code
                  </label>
                  <div className="input-group flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
											value="425"
                    />
                    <span className="input-group-text">
                      <i className="bi me-1 bi-copy"></i>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Profile;
