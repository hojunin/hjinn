import React, { useEffect, useState } from 'react';

import { BOOK, BOOK_STATUS } from '@site/static/types/books';

const useSortBooks = (books: BOOK[], key?: 'date' | 'title' | 'review') => {
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

        if (indexA !== indexB) {
          return indexA - indexB;
        } else {
          return b.createdDate - a.createdDate;
        }
      });
    } catch (error) {
      return books;
    }
  };
  return filteredBooks;
};

export default useSortBooks;
