import React from "react";
import { theme } from "../theme/default";

export const LogoIcon = ({ color = "blue" }) => {
  return (
    <svg
      width="170"
      height="30"
      viewBox="0 0 170 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color ? theme.colors[color] : "#554DF1"}
        fontFamily="Arial, sans-serif"
        fontSize="24"
      >
        HAMILTON
      </text>
    </svg>
  );
};
