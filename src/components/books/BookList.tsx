import React from 'react';
import { books } from '../../../static/constants/books';
import styles from './index.module.css';
const BookList = () => {
  return (
    <section>
      <ul>
        <div className={styles.header}>
          <span className={styles.title}>제목</span>
          <span className={styles.author}>저자</span>
          <span className={styles.description}>간단소개</span>
          <span className={styles.headerTags}>태그</span>
        </div>
        {books.map((book) => (
          <li key={book.id} className={styles.listItem}>
            <span className={styles.title}>{book.title}</span>
            <span className={styles.author}>{book.author}</span>
            <span className={styles.description}>{book.quickDescription}</span>
            <span className={styles.tags}>{book.tags.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookList;
