import React, { useEffect, useContext } from "react";
import { AppSettings } from "./../../config/app-settings.js";
import Globe from "../../components/globe/globe.jsx";
import { useIsMobile } from "../../hooks/useIsMobile.js";
import LandingHeader from "../../components/landingHeader/landingHeader.js";

function Landing() {
  const context = useContext(AppSettings);
  const isMobile = useIsMobile(980);
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

  return (
    <div className={isMobile ? "mobile" : ""}>
      <LandingHeader />
      <Globe />
    </div>
  );
}

export default Landing;
