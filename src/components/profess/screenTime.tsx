import { SCREEN_TIME } from '@site/static/types/profess';
import React from 'react';
import './index.css';

const ScreenTime = ({ data }: { data: SCREEN_TIME }) => {
  return (
    <div>
      <p>
        - 하루 평균 <strong>{`${data.time.average}`}</strong>
        이나 핸드폰을 붙잡고 살았어요
      </p>
      <p>
        - 그렇게 버린 시간이 한주간 총 <strong>{`${data.time.all}`}</strong>
        이에요.
      </p>
      {data.compare.status === 'same' ? (
        <p>- 지난 주 대비 비슷한 수치에요.</p>
      ) : (
        <p>
          - 지난 주 대비 <strong>{data.compare.percent}%</strong>
          {data.compare.status === 'added'
            ? '나 늘었어요 😇'
            : '나 줄었어요 😎'}
        </p>
      )}
    </div>
  );
};

export default ScreenTime;
