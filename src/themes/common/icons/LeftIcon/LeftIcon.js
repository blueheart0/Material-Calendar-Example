import React from "react";

const KeyIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="5"
    height="10"
    viewBox="0 0 5 10"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M5 10L0 5l5-5z"
        opacity=".87"
      />
      <path d="M15 17V-7H-9v24z" />
    </g>
  </svg>
);
export default KeyIcon;
