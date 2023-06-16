import React, { useState, useEffect } from 'react';
import "./MapComponent.scss"

const MapComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframeElement = document.querySelector(".map iframe");
    iframeElement.addEventListener("load", handleMapLoad);
    return () => {
      iframeElement.removeEventListener("load", handleMapLoad);
    };
  }, []);

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="map">
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner-7"></div>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.2174154474928!2d-73.9811434!3d40.75246!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1686897024944!5m2!1sen!2saz"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
