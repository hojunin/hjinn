import React from 'react';

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
    >
      <rect x="0" y="0" width="20" height="20" fill="transparent" />

      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />

      <text
        x="50%"
        y="65%"
        text-anchor="middle"
        font-size="12"
        fill="currentColor"
        font-weight="bold"
      >
        i
      </text>
      <rect x="9.5" y="49%" width="1" height="5" fill="currentColor" />
      <circle cx="10" cy="45%" r="1" fill="currentColor" />
    </svg>
  );
};

export default InfoIcon;
