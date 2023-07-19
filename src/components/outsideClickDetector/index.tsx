import React, { useEffect, useRef } from 'react';

interface OutsideClickDetectorProps {
  onOutsideClick: () => void;
  children: React.ReactElement;
}

const OutsideClickDetector = ({
  onOutsideClick,
  children,
}: OutsideClickDetectorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onOutsideClick]);

  return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickDetector;
