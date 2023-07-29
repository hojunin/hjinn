import React from 'react';
import { ValueOf } from 'static/constants/books';
import styled from 'styled-components';
import Star from '../icons/star';

export const TAG_TYPE = Object.freeze({
  RATING: '평점',
  STATUS: '상태',
  REVIEW: '서평여부',
});

const getColorByType = (type: ValueOf<typeof TAG_TYPE>) => {
  switch (type) {
    case TAG_TYPE.STATUS:
      return '#c789af';
    case TAG_TYPE.REVIEW:
      return '#b03fef';
    case TAG_TYPE.RATING:
      return '#999eee';
    default:
      return 'blue';
  }
};

const Tag = ({
  type,
  value,
}: {
  type: ValueOf<typeof TAG_TYPE>;
  value: string | number;
}) => {
  return (
    <Container bg={getColorByType(type)}>
      {type === TAG_TYPE.RATING && (
        <StarWrapper>
          <Star />
        </StarWrapper>
      )}
      {value}
    </Container>
  );
};

export default Tag;

const Container = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  padding: 4px 10px;
  margin-right: 4px;
  border-radius: 4px;

  white-space: nowrap;
`;

const StarWrapper = styled.div`
  display: inline;
  margin-right: 4px;
`;
