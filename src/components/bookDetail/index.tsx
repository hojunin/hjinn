import React, {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import OutsideClickDetector from '../outsideClickDetector';
import { BOOK } from 'static/constants/books';
import styled from 'styled-components';

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
        <Container>
          어사이드 컴포넌트
          <h1>{book.title}</h1>
        </Container>
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
  background-color: white;
`;
