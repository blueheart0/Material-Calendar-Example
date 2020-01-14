import React from "react";

const OpenfolderIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="16"
    viewBox="0 0 20 16"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-2-4h24v24H-2z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M18 2h-8L8 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H2V4h16v10z"
      />
    </g>
  </svg>
);
export default OpenfolderIcon;
