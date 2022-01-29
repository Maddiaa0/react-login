import React from "react";

const Button = ({ color, children, click, radius, icon, boxShadow }) => {
  return (
    <div
      className="button"
      onClick={click}
      style={{
        backgroundColor: color,
        borderRadius: radius,
        boxShadow: boxShadow,
      }}
    >
      {children}
      {icon && icon}
    </div>
  );
};

export default Button;
