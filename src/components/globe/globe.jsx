import React, { useEffect, useRef } from "react";

const Globe = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8aoilq31fjDhCty4mcsp23YP2pj66xHY&v=alpha&callback=initMap3D`;
      script.async = true;
      script.onerror = () =>
        console.error("The Google Maps JavaScript API could not load.");
      document.head.appendChild(script);
    };

    window.initMap3D = async () => {
      if (window.google && window.google.maps) {
        const { maps } = window.google;
        if (maps.importLibrary) {
          const { Map3DElement } = await maps.importLibrary("maps3d");
          if (Map3DElement) {
            const map3DElement = new Map3DElement({
              center: {
                lat: 0,
                lng: 0,
                altitude: window.innerWidth > 700 ? 25000000 : 45000000,
              },
              defaultLabelsDisabled: true,
              atmosphereDisabled: true,
              googleLogoDisabled: true,
            });

            // Append the map3DElement to the ref container
            if (mapContainerRef.current) {
              mapContainerRef.current.appendChild(map3DElement);

              // Access the shadow root and add styles
              const shadowRoot = map3DElement.shadowRoot;
              if (shadowRoot) {
                const styleElement = document.createElement("style");
                styleElement.textContent = `
                  canvas {
                    border: 2px solid red; /* Example style */
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Example style */
                  }
                `;
                shadowRoot.appendChild(styleElement);
              }
            } else {
              console.error("Map container is not available.");
            }
          } else {
            console.error("Map3DElement is not available.");
          }
        } else {
          console.error("maps.importLibrary is not a function.");
        }
      } else {
        console.error("Google Maps API is not loaded.");
      }
    };

    loadGoogleMapsAPI();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }} ref={mapContainerRef}></div>
  );
};

export default Globe;
