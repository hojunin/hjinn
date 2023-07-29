import React, { useState, useEffect, useRef } from 'react';
import { books } from '../../../static/constants/books';
import styles from './index.module.css';
import Tag, { TAG_TYPE } from '../tag';
import styled from 'styled-components';
import BookDetail, { BookDetailModalRef } from '../bookDetail';
import { BOOK, BOOK_STATUS } from '@site/static/types/books';

const BookList = () => {
  const detailRef = useRef<BookDetailModalRef | null>(null);
  // 나중에 필터랑 소터 넣자.
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const sorted = sortByStatusAscending(books);
    setFilteredBooks(sorted);
  }, [books]);

  const sortByStatusAscending = (books: BOOK[]): BOOK[] => {
    try {
      const customStatusOrder = [
        BOOK_STATUS.DONE,
        BOOK_STATUS.N,
        BOOK_STATUS.ONGOING,
        BOOK_STATUS.NOTYET,
        BOOK_STATUS.DROP,
      ];

      return [...books].sort((a, b) => {
        const statusA = a.tags.status;
        const statusB = b.tags.status;

        const indexA = customStatusOrder.indexOf(statusA);
        const indexB = customStatusOrder.indexOf(statusB);

        return indexA - indexB;
      });
    } catch (error) {
      return books;
    }
  };

  const onClickBook = (book: BOOK) => {
    detailRef.current?.open(book);
  };
  const isBookReviewEnable = (book: BOOK) => {
    const links = book.links;
    return 'instagram' in links || 'brunch' in links;
  };
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
            {isBookReviewEnable(book) && (
              <Tag type={TAG_TYPE.REVIEW} value={'서평'} />
            )}
            {book.tags.rating && (
              <Tag type={TAG_TYPE.RATING} value={book.tags.rating / 2} />
            )}
          </span>
        </li>
      ))}

      <BookDetail ref={detailRef} />
    </ListContainer>
  );
};

export default BookList;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0px 0px;
`;
