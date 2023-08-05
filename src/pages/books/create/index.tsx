import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useCreateBook from '../../../utils/useCreateBook';
import { books } from '@site/static/constants/books';

const CreateBook = () => {
  const [targetBook, setTargetBook] = useState();
  const { create, isError, isLoading } = useCreateBook(
    JSON.stringify(targetBook),
  );

  const onClickItem = (book) => {
    const targetBook = { ...book };
    delete targetBook.createdDate;
    setTargetBook(targetBook);

    setTimeout(create, 10);
  };

  return (
    <Layout>
      <h1>{isLoading ? '로딩중' : isError ? '에러발생' : '성공!'}</h1>
      <ol
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 10,
          padding: '0px 20px',
        }}
      >
        {books.map((book) => (
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{book.title}</span>

            <button onClick={() => onClickItem(book)}>누르면 생성된다</button>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default CreateBook;
