export const BOOK_STATUS = {
  NOTYET: '읽을 예정',
  ONGOING: '읽는 중',
  DONE: '완독',
  DROP: '안읽을래',
  N: 'N회독',
};

type BOOK = {
  title: string;
  author: string;
  quickDescription: string;
  description: string;
  createdDate: Date;
  links: {
    instagram?: string;
    brunch?: string;
  };
  tags: {
    status: ValueOf<typeof BOOK_STATUS>;
    review: boolean;
  };
};

export type ValueOf<T> = T[keyof T];

export const books: BOOK[] = [
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '역행자',
    author: '자청',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
];
