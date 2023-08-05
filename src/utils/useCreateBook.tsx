import { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { fetcher } from '@site/src/utils/fetcher';
const useCreateBook = (body) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const create = () => {
    if (!body) {
      console.error('title이 없어');
      return;
    }
    setIsLoading(true);

    fetcher({
      path: 'books',
      config: {
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${customFields.password}`,
        },
      },
    })
      .then((res) => res)
      .catch((e) => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  return { create, isLoading, isError };
};

export default useCreateBook;
