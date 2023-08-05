import { useEffect, useState } from 'react';
import { fetcher } from '@site/src/utils/fetcher';

/**
 * infinite scroll로 책 리스트를 가져오는 훅
 * @param page
 */
const useFetchBooks = (page = 1) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetcher({
      path: `books?page=${page}`,
    }).then((booksFromServer) => {
      if (Array.isArray(booksFromServer)) {
        setBooks((prev) => [...prev, ...booksFromServer]);
      }
    });
  }, [page]);

  return books;
};

export default useFetchBooks;
