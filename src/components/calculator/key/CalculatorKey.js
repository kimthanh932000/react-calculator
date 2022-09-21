import React, { useEffect, useState } from "react";
import "./styles.scss";

const CalculatorKey = ({ action, children, classes }) => {
  return <button className={`key ${classes}`}>{children}</button>;
};

export default CalculatorKey;
