import React from "react";

const PersonIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillOpacity="0.98"
        fillRule="nonzero"
        d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      />
      <path d="M-4-4h24v24H-4z" />
    </g>
  </svg>
);
export default PersonIcon;
