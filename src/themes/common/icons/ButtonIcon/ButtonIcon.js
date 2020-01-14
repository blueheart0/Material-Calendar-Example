import React from "react";

const ButtonIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="8"
    viewBox="0 0 20 8"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-2-8h24v24H-2z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M18.947 0C19.527 0 20 .45 20 1v6c0 .55-.474 1-1.053 1H1.053C.473 8 0 7.55 0 7V1c0-.55.474-1 1.053-1zM18 2H2v4h16V2z"
      />
    </g>
  </svg>
);
export default ButtonIcon;
