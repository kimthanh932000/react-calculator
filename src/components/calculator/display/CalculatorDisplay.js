import React, { useEffect, useState } from "react";
import "./styles.scss";

const CalculatorDisplay = ({ children }) => {
  return (
    <div className="calculator__display">
      <span className="calculator__display-result" id="display">
        {children}
      </span>
    </div>
  );
};

export default CalculatorDisplay;
