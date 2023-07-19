import React from 'react';
import styles from './index.module.css';

const StatusBox = ({ status }) => {
  return <div className={styles.container}>{status}</div>;
};

export default StatusBox;
