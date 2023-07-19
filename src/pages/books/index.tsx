import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import BookList from '../../components/books/BookList';
import { BOOK } from 'static/constants/books';

const Books = () => {
  const onClickBook = (book: BOOK) => {};

  return (
    <Layout title={'책'} description="책페이지">
      <div className={styles.root}>
        <div className={styles.container}>
          <h1>호준쓰 도서관</h1>

          <BookList onClickBook={onClickBook} />
        </div>
      </div>
    </Layout>
  );
};

export default Books;
