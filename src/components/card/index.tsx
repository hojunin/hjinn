import React from 'react';
import styles from './index.module.css';

import InfoToggle from '../InfoToggle';

interface CardProps {
  title: string;
  toggleDescription?: string;
  children: JSX.Element | JSX.Element[];
}

const Card = ({ title, toggleDescription, children }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
          {toggleDescription && <InfoToggle description={toggleDescription} />}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
