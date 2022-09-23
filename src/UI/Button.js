import React from "react";
import "../styles/Button.css";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
