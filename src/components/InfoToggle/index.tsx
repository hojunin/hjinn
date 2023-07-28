import React from 'react';
import InfoIcon from '../icons/info';
import useHover from '@site/src/utils/useHover';
import styles from './index.module.css';

const InfoToggle = ({ description }) => {
  const [ref, isHovered] = useHover();
  return (
    <div ref={ref} style={{ display: 'inline', position: 'relative' }}>
      <InfoIcon />
      {isHovered && <div className={styles.tooltip}>{description}</div>}
    </div>
  );
};

export default InfoToggle;
