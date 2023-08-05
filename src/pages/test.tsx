import React from 'react';
import Layout from '@theme/Layout';
import useFetchBooks from '../components/books/useFetchBooks';

const Test = () => {
  const books = useFetchBooks();
  return (
    <Layout>
      {books?.map((book) => (
        <li>{book.title}</li>
      ))}
    </Layout>
  );
};

export default Test;
