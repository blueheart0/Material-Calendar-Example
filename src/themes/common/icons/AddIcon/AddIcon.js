import React from "react";

const AddIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-2-2h24v24H-2z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 11h-4v4H9v-4H5V9h4V5h2v4h4v2z"
      />
    </g>
  </svg>
);
export default AddIcon;
