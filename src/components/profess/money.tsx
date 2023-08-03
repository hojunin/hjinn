import { MONEY } from '@site/static/types/profess';
import React from 'react';
import './index.css';
import { addCommas } from '@site/src/utils/number';

const Money = ({ data }: { data: MONEY }) => {
  return (
    <div>
      {data.cafe.count > 0 ? (
        <p>
          - 카페에 <strong>{data.cafe.count}</strong>번 가서{' '}
          <strong>{addCommas(data.cafe.amount)}</strong>
          원을 지출했어요
        </p>
      ) : (
        <p>- 이번 주에는 카페에 한번도 안갔어요🥳</p>
      )}

      {data.delivery.count > 0 ? (
        <p>
          - 배달음식을 <strong>{data.delivery.count}</strong>번 주문하고{' '}
          <strong>{addCommas(data.delivery.amount)}</strong>
          원을 지출했어요
        </p>
      ) : (
        <p>- 이번 주에는 배달음식을 한번도 안시켰어요 🥳</p>
      )}
    </div>
  );
};

export default Money;
