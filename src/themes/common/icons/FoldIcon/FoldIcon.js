import React from "react";

const FoldIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M10 0c5.53 0 10 4.47 10 10s-4.47 10-10 10S0 15.53 0 10 4.47 0 10 0zM8 11.41L11.59 15 13 13.59 9.41 10 13 6.41 11.59 5 8 8.59 6.59 10 8 11.41z"
      />
      <path d="M22-2H-2v24h24z" />
    </g>
  </svg>
);
export default FoldIcon;
