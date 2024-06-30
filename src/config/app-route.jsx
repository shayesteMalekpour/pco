import React from "react";
import App from "./../app.jsx";
import PagesError from "./../pages/pages/error.js";
import Profile from "./../pages/profile/profile.js";
import Landing from "./../pages/landing/landing.js";
import Projects from "./../pages/projects/projects.js";
import Staking from "../pages/staking/staking.js";
import Orders from "../pages/orders/orders.js";
import PurchasedLands from "../pages/purchasedLands/purchasedLands.js";
import Referees from "../pages/referees/referees.js";
import Seasons from "../pages/seasons/seasons.js";
import Signup from "../pages/signup/signup.js";
const AppRoute = [
  {
    path: "*",
    element: <App />,
    children: [
      { path: "", element: <Landing /> },
      {
        path: "dashboard",
        children: [
          { path: "projects", element: <Projects /> },
          { path: "stakes", element: <Staking /> },
          { path: "orders", element: <Orders /> },
          { path: "profile", element: <Profile /> },
          { path: "purchased-lands", element: <PurchasedLands /> },
          { path: "referees", element: <Referees /> },
          { path: "seasons", element: <Seasons /> },
        ],
      },
      { path: "signup", element: <Signup /> },
      { path: "*", element: <PagesError /> },
    ],
  },
];

export default AppRoute;
