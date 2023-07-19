import React from 'react';
import styles from './index.module.css';

const StatusBox = ({ status }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{status}</p>
    </div>
  );
};

export default StatusBox;
