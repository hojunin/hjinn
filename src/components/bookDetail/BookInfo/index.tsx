import { getElapsedTime } from '@site/src/utils/date';
import React from 'react';
import { styled } from 'styled-components';

const BookInfo = ({ title, author, coverImage, date }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>{`저자 : ${author} | 읽은 날 : ${
        getElapsedTime(date) ?? '아직 읽지 않음'
      }`}</Author>

      <CoverImage src={coverImage} alt={`${title} 책 커버 이미지`} />
    </Container>
  );
};

export default BookInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: left;
  margin: 0;
  align-self: flex-start;
`;

const Author = styled.h4`
  text-align: left;
  margin: 0;
  align-self: flex-start;
  margin-top: 10px;
`;

const CoverImage = styled.img`
  aspect-ratio: 1 / 1.5;
  width: 50%;
  text-align: center;
  align-self: center;
  margin: 20px 0px;
`;
