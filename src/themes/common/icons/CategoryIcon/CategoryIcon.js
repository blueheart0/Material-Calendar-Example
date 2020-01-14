import React from "react";

const CategoryIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M16 2v4h-4V2h4M6 2v4H2V2h4m10 10v4h-4v-4h4M6 12v4H2v-4h4M18 0h-8v8h8V0zM8 0H0v8h8V0zm10 10h-8v8h8v-8zM8 10H0v8h8v-8z"
      />
      <path d="M-3-3h24v24H-3z" />
    </g>
  </svg>
);
export default CategoryIcon;
