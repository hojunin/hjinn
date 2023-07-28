import { USING_APP_RANKING } from '@site/static/types/profess';
import React from 'react';
import AppListItem from './appItem';
import './index.css';

const UsingAppRanking = ({ data }: { data: USING_APP_RANKING }) => {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {data.app.map((app) => (
        <AppListItem key={`${app.name}_${app.metadata}`} app={app} />
      ))}
    </ul>
  );
};

export default UsingAppRanking;
