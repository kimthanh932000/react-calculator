import React, { useState, useEffect } from "react";
import CalculatorDisplay from "./display/CalculatorDisplay";
import CalculatorKey from "./key/CalculatorKey";
import "./styles.scss";

const Calculator = () => {
  const operators = [
    {
      action: "add",
      text: "+"
    },
    {
      action: "subtract",
      text: "-"
    },
    {
      action: "multiply",
      text: "*"
    },
    {
      action: "divide",
      text: "÷"
    }
  ];
  const [displayContent, setDisplayContent] = useState(0);

  return (
    <div className="calculator">
      <CalculatorDisplay>{displayContent}</CalculatorDisplay>
      <div className="calculator__keys">
        <div className="calculator__operators">
          {operators.map((operator, i) => (
            <CalculatorKey action={operator.action} key={i}>
              {operator.text}
            </CalculatorKey>
          ))}
        </div>
        <div className="calculator__main">
          <div className="numbers-container">
            <div className="group-numbers">
              <CalculatorKey action="number">7</CalculatorKey>
              <CalculatorKey action="number">8</CalculatorKey>
              <CalculatorKey action="number">9</CalculatorKey>
            </div>
            <div className="group-numbers">
              <CalculatorKey action="number">4</CalculatorKey>
              <CalculatorKey action="number">5</CalculatorKey>
              <CalculatorKey action="number">6</CalculatorKey>
            </div>
            <div className="group-numbers">
              <CalculatorKey action="number">1</CalculatorKey>
              <CalculatorKey action="number">2</CalculatorKey>
              <CalculatorKey action="number">3</CalculatorKey>
            </div>
            <div className="group-numbers">
              <CalculatorKey action="number">0</CalculatorKey>
              <CalculatorKey action="dot">.</CalculatorKey>
              <CalculatorKey action="clear">C</CalculatorKey>
            </div>
          </div>
          <div className="equal">
            <CalculatorKey action="equal" classes="key--big">
              =
            </CalculatorKey>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
