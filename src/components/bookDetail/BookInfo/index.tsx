import React from 'react';
import { styled } from 'styled-components';

const BookInfo = ({ title, author, coverImage }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>{author}</Author>

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

const Author = styled.h6`
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
