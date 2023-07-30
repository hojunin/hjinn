import { ValueOf } from '.';

export const BOOK_STATUS = {
  NOTYET: '읽을 예정',
  ONGOING: '읽는 중',
  DONE: '완독',
  DROP: '안읽을래',
  N: 'N회독',
};

export type BOOK = {
  title: string;
  author: string;
  coverImage: string;
  quickDescription: string;
  description: string;
  createdDate: Date;
  links: {
    instagram?: string;
    brunch?: string;
  };
  tags: {
    status: ValueOf<typeof BOOK_STATUS>;
    rating: number; // 1~10
  };
};
