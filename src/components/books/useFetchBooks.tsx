import { useEffect, useState } from 'react';
import { fetcher } from '@site/src/utils/fetcher';
import { BOOK } from '@site/build/types/books';
/**
 * infinite scroll로 책 리스트를 가져오는 훅
 * @param page
 */
const useFetchBooks = (page = 1) => {
  const [data, setData] = useState<BOOK[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetcher({
      path: `books?page=${page}`,
    })
      .then((booksFromServer) => {
        if (Array.isArray(booksFromServer)) {
          setData((prev) => [...prev, ...booksFromServer]);
        }
      })
      .catch((e) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [page]);

  return { isLoading, isError, data };
};

export default useFetchBooks;
