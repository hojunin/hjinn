import React from 'react';
import BookListSkeleton from '../books/booklistSkeleton';
import useFetchBooks from '../books/useFetchBooks';
import BookList from '../books/BookList';

const TestBooks = () => {
  const { data: books, isError, isLoading } = useFetchBooks();
  if (isLoading) {
    return <BookListSkeleton />;
  }
  if (isError) {
    return <h1>안타깝게도 에러가 발생했다. Damm it </h1>;
  }

  return <BookList books={books} />;
};

export default TestBooks;
