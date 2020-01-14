import React from "react";

const DeleteIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="18"
    viewBox="0 0 14 18"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M13 4v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V4h12zM5 6H3v10h2V6zm3 0H6v10h2V6zm3 0H9v10h2V6zM9.5 0l1 1H14v2H0V1h3.5l1-1h5z"
      />
      <path d="M-5-3h24v24H-5z" />
    </g>
  </svg>
);
export default DeleteIcon;
