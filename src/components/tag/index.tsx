import React from 'react';
import styles from './index.module.css';

const Tag = ({ type, value }) => {
  return <div className={styles.root}>Tag</div>;
};

export default Tag;

export const TagType = {} as const;
