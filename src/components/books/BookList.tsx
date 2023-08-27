import React, { useRef } from 'react';
import styles from './index.module.css';
import Tag, { TAG_TYPE } from '../tag';
import styled from 'styled-components';
import BookDetail, { BookDetailModalRef } from '../bookDetail';
import useSortBooks from './useSortBooks';
import { BOOK } from '@site/build/types/books';

const BookList = ({ books }: { books: BOOK[] }) => {
  const detailRef = useRef<BookDetailModalRef | null>(null);
  const filteredBooks = useSortBooks(books);

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
              <Tag type={TAG_TYPE.REVIEW} value={'독서록'} />
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
