import { WAKE_UP_APP } from '@site/static/types/profess';
import React from 'react';
import AppListItem from './appItem';
import './index.css';

const WakeUpScreen = ({ data }: { data: WAKE_UP_APP }) => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <p>
          - 하루 평균 <strong>{data.count.average}</strong>번, 한 주동안 총{' '}
          <strong>{data.count.all}</strong>번 휴대폰 화면을 켰어요.
          <strong>{data.count.max.day}요일</strong>에만{' '}
          <strong>{data.count.max.count}번</strong>이에요.
        </p>
        {data.count.compare.status === 'same' ? (
          <p>- 지난 주 대비 비슷한 수치에요.</p>
        ) : (
          <p>
            - 지난 주 대비, <strong>{data.count.compare.percent}%</strong>{' '}
            {data.count.compare.status === 'added'
              ? '증가했어요 🤪'
              : '감소했어요 😆'}
          </p>
        )}
        <p>- 기껏 켜고는 이런 앱들을 실행했어요</p>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: '0px 10px' }}>
        {data.firstApp.map((app) => (
          <AppListItem
            key={`${app.name}_${app.metadata}`}
            app={app}
            metadataSuffix="회"
          />
        ))}
      </ul>
    </div>
  );
};

export default WakeUpScreen;
