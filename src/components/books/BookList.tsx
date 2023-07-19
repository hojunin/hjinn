import React, { useState, useEffect } from 'react';
import { books } from '../../../static/constants/books';
import styles from './index.module.css';
import Tag, { TAG_TYPE } from '../tag';
import styled from 'styled-components';

const BookList = ({ onClickBook }) => {
  // 나중에 필터랑 소터 넣자.
  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <ListContainer>
      <div className={styles.header}>
        <span className={styles.title}>제목</span>
        <span className={styles.author}>저자</span>
        <span className={styles.description}>간단소개</span>
        <span className={styles.headerTags}>태그</span>
      </div>
      {filteredBooks.map((book) => (
        <li
          key={book.title}
          className={styles.listItem}
          onClick={() => onClickBook(book)}
        >
          <span className={styles.title}>{book.title}</span>
          <span className={styles.author}>{book.author}</span>
          <span className={styles.description}>{book.quickDescription}</span>
          <span className={styles.tags}>
            <Tag type={TAG_TYPE.STATUS} value={book.tags.status} />
            <Tag
              type={TAG_TYPE.REVIEW}
              value={book.tags.review ? '서평O' : '서평X'}
            />
            {book.tags.rating && (
              <Tag type={TAG_TYPE.RATING} value={book.tags.rating} />
            )}
          </span>
        </li>
      ))}
    </ListContainer>
  );
};

export default BookList;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0px 0px;
`;
