import React from 'react';
import styles from './index.module.css';
import GoLeftIcon from '../icons/goLeft';
import GoRightIcon from '../icons/goRight';

interface WeekSelectorProps {
  currentWeek: string;
  onClickLeft: () => void;
  onClickRight: () => void;
  leftDisabled: boolean;
  rightDisabled: boolean;
}

const WeekSelector = ({
  currentWeek,
  onClickLeft,
  onClickRight,
  leftDisabled,
  rightDisabled,
}: WeekSelectorProps) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.noStyle}
        disabled={leftDisabled}
        onClick={onClickLeft}
      >
        <GoLeftIcon disabled={leftDisabled} />
      </button>
      <span className={styles.currentWeek}>{currentWeek}</span>
      <button
        className={styles.noStyle}
        disabled={rightDisabled}
        onClick={onClickRight}
      >
        <GoRightIcon disabled={rightDisabled} />
      </button>
    </div>
  );
};

export default WeekSelector;
