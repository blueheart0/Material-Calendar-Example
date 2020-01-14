import React from "react";

const RightIcon = props => (
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
        d="M0 10l5-5-5-5z"
        opacity=".87"
      />
      <path d="M-10 17V-7h24v24z" />
    </g>
  </svg>
);
export default RightIcon;
