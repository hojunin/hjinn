import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import BookList from '../../components/books/BookList';

const Books = () => {
  return (
    <Layout title={'책'} description="책페이지">
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
