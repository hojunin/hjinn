import React, {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import OutsideClickDetector from '../outsideClickDetector';
import { BOOK } from 'static/constants/books';
import styled from 'styled-components';
import styles from './index.module.css';

interface BookDetailModalProps {
  book: BOOK;
}

export interface BookDetailModalRef {
  open: (book: BOOK) => void;
  close: () => void;
}

const BookDetail = forwardRef<BookDetailModalRef, BookDetailModalProps>(
  (props, ref) => {
    const [book, setBook] = useState<BOOK | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const open = useCallback((book: BOOK) => {
      setBook(book);
      setIsVisible(true);
    }, []);

    const close = useCallback(() => {
      setIsVisible(false);
      setBook(null);
    }, []);
    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [open, close],
    );
    if (!isVisible || !book) {
      return <></>;
    }

    return (
      <OutsideClickDetector onOutsideClick={close}>
        <aside className={styles.container}>
          <div className={styles.header}>
            <StatusBox status={book.tags.status} />
          </div>

          <h1>{book.title}</h1>

          <p>{book.description}</p>
        </aside>
      </OutsideClickDetector>
    );
  },
);

export default BookDetail;

const Container = styled.aside`
  position: fixed;
  width: 33%;
  top: 0px;
  right: 0px;
  height: 100%;
  z-index: 999;
`;
