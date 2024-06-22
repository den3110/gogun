// CustomToast.js
import React from 'react';

const CustomAlert = ({ message, closeToast }) => {
  return (
    <div className="custom-toast">
      <div className="custom-toast-content">
        <i className="custom-toast-icon">🔔</i>
        <span>{message}</span>
      </div>
      <button className="custom-toast-close" onClick={closeToast}>
        &times;
      </button>
    </div>
  );
};

export default CustomAlert;
