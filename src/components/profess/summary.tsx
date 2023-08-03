import { SUMMARY } from '@site/static/types/profess';
import React from 'react';

const Summary = ({ data }: { data: SUMMARY }) => {
  if (!Array.isArray(data.summaries) || data.summaries.length === 0) {
    return <p>이번 주는 요약글이 없습니다.</p>;
  }
  return (
    <ol>
      {data.summaries.map((summary) => (
        <li key={summary}>{`${summary}`}</li>
      ))}
    </ol>
  );
};

export default Summary;
