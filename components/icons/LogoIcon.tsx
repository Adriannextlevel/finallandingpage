
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2L2 7V17L12 22L22 17V7L12 2ZM4 8.236L12 12.528L20 8.236V15.764L12 20.056L4 15.764V8.236ZM12 4.472L19.053 8.5L12 12.528L4.947 8.5L12 4.472Z"
    />
  </svg>
);
