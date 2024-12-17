import React from 'react';
import PropTypes from 'prop-types';  // For prop validation

const Locationpanel = ({ setvehiclePanelOpen, setPanelOpen, vehiclePanel }) => {
  const locations = [
    "mahakal ghati",
    "bhimtal",
    "nainital",
    "ramnagar",
    "dhikuli",
  ];

  return (
    <div className="ml-4">
      {
        locations.map((elem, index) => {
          return (
            <div
              key={index}  // Ensure each item has a unique key
              onClick={() => {
                setvehiclePanelOpen(true);  // Open vehicle panel
                setPanelOpen(false);        // Close the location panel
              }}
              className="flex border-2 p-2 rounded-xl border-white active:border-black items-center my-2 gap-4 justify-start"
            >
              <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className="font-medium">{elem}</h4>
            </div>
          );
        })
      }
    </div>
  );
};

// Prop validation for the component
Locationpanel.propTypes = {
  setvehiclePanelOpen: PropTypes.func.isRequired,  // Ensure this is a function
  setPanelOpen: PropTypes.func.isRequired,         // Ensure this is a function
  vehiclePanel: PropTypes.bool.isRequired,         // Ensure vehiclePanel is a boolean
};

export default Locationpanel;
