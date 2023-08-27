import React, {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import OutsideClickDetector from '../outsideClickDetector';
import styled from 'styled-components';
import styles from './index.module.css';
import StatusBox from './StatusBox/index';
import BrunchImage from '../../../static/img/brunch.png';
import BookInfo from './BookInfo/index';
import Close from '../icons/close';
import { BOOK } from '@site/static/types/books';

interface BookDetailModalProps {}

export interface BookDetailModalRef {
  open: (book: BOOK) => void;
  close: () => void;
}

const BookDetail = forwardRef<BookDetailModalRef, BookDetailModalProps>(
  (props, ref) => {
    const [book, setBook] = useState<BOOK | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const openModal = useCallback((book: BOOK) => {
      setTimeout(() => {
        setBook(book);
        setIsVisible(true);
      }, 0);
    }, []);

    const close = useCallback(() => {
      setIsVisible(false);
      setBook(null);
    }, []);
    useImperativeHandle(
      ref,
      () => ({
        open: openModal,
        close,
      }),
      [openModal, close],
    );
    if (!isVisible || !book) {
      return <></>;
    }

    const onClickLink = (type) => {
      if (!book.links[type]) {
        return;
      }
      try {
        open(book.links[type]);
      } catch (error) {}
    };

    return (
      <OutsideClickDetector onOutsideClick={close}>
        <aside className={styles.container}>
          <div className={styles.header}>
            <StatusBox status={book.tags.status} />
            <div className={styles.iconsContainer}>
              <IconButton
                onClick={() => onClickLink('instagram')}
                enable={!!book.links.instagram}
              >
                <InstaIcon />
              </IconButton>
              <IconButton
                onClick={() => onClickLink('brunch')}
                enable={!!book.links.brunch}
              >
                <BrunchIcon />
              </IconButton>

              <IconButton onClick={close} enable>
                <Close />
              </IconButton>
            </div>
          </div>

          <BookInfo
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            date={book.createdDate}
          />

          {book.description?.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </aside>
      </OutsideClickDetector>
    );
  },
);
export default BookDetail;

const IconButton = styled.button<{ enable: boolean }>`
  all: unset;
  opacity: ${({ enable }) => (enable ? 1 : 0.3)};
  cursor: ${({ enable }) => (enable ? 'pointer' : 'normal')};
  border-radius: 4px;
  padding: 4px;
  margin-right: 4px;
`;

const InstaIcon = styled.img.attrs({
  src: 'https://cloud.getcha.io/icons/app-large-instragram_link.png',
  alt: '인스타 아이콘',
})`
  width: 30px;
  height: 30px;
`;

const BrunchIcon = styled.img.attrs({
  src: BrunchImage,
  alt: '브런치 아이콘',
})`
  width: 30px;
  height: 30px;
`;
