import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import BookList from '../../components/books/BookList';
import { books } from '@site/static/constants/books';

const Books = () => {
  return (
    <Layout
      title={'독서기록'}
      description={`최근 읽은 책들을 정리했어요 - ${books
        .map((book) => book.title)
        .join(',')}`}
    >
      <div className={styles.root}>
        <div className={styles.container}>
          <h1>호준쓰 도서관 📚</h1>

          <BookList />
        </div>
      </div>
    </Layout>
  );
};

export default Books;
