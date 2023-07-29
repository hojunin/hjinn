import React from 'react';
import styles from './index.module.css';

const Star = () => {
  return (
    <div className={styles.rating}>
      <div className={styles.star} />
    </div>
  );
};

export default Star;
