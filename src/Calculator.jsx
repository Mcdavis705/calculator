import { useState } from "react";
import { Container } from "react-bootstrap";

import Display from "./Display";
import Keyboard from "./Keyboard";

function Calculator(props) {
  // states
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  // styles
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    borderRadius: "5px",
    width: "300px",
    height: "400px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    margin: "50px auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  // Clear display
  const clearDisplay = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
  };

  // Calculate result and clear display
  const calcular = () => {
    const currentValue = parseFloat(display);
    if (previousValue === null || operation === null) return;

    let result;

    switch (operation) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "/":
        if (currentValue === 0) {
          alert("Cannot divide by zero!");
          clearDisplay();
          return;
        }
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  // click handler
  const click = (input) => {
    if (input === "C") return clearDisplay();
    if (input === "%") return setDisplay((parseFloat(display) / 100).toString());
    if (input === ".") {
      if (!display.includes(".")) {
        setDisplay(display + ".");
      }
      return;
    }
    if (!isNaN(input)) {
      if (display === "0") setDisplay(input);
      else setDisplay(display + input);
      return;
    }
    if (["+", "-", "*", "/"].includes(input)) {
      if (operation === null) {
        setPreviousValue(parseFloat(display));
        setOperation(input);
        setDisplay("0");
      } else {
        calcular();
        setOperation(input);
      }
      return;
    }
    if (input === "=") calcular();
  };

  return (
    <Container style={layoutStyle}>
      <Display display={display} />
      <Keyboard click={click} />
    </Container>
  );
}

export default Calculator;
