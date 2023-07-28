import { APP_ICON } from '@site/static/constants/profess';
import { APP_NAME } from '@site/static/types/profess';
import React from 'react';
import './index.css';
const AppListItem = ({
  app,
  metadataSuffix,
}: {
  app: { name: APP_NAME; metadata: string };
  metadataSuffix?: string;
}) => {
  const { name, metadata } = app;
  return (
    <li
      key={`${name}_${metadata}`}
      style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}
    >
      <img
        src={APP_ICON[name]}
        alt={`${name} 앱 아이콘`}
        width={24}
        height={24}
        style={{
          borderRadius: 4,
          marginRight: 8,
        }}
      />
      {name} :{' '}
      <strong style={{ margin: 0, paddingLeft: 4 }}>
        {metadata}
        {metadataSuffix}
      </strong>
    </li>
  );
};

export default AppListItem;
