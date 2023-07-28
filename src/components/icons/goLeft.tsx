import React from 'react';

const GoLeftIcon = ({ disabled }: { disabled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
    >
      <circle cx="12" cy="12" r="11" fill="#EAEAEA" />

      <path d="M 6 12 l 10-8 v 16 z" fill={disabled ? '#7c7c7c' : '#333'} />
    </svg>
  );
};

export default GoLeftIcon;
