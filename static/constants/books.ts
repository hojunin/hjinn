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
    rating: number; // 1~10
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
      rating: 10,
    },
  },
  {
    title: '초인류',
    author: '김상균',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/03'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      review: false,
      rating: 5,
    },
  },
  {
    title: '비상식적 성공 법칙',
    author: '간다 마사노리',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/01'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 4,
    },
  },
  {
    title: '레버리지',
    author: '롭 무어',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/06/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '내가 틀릴 수도 있습니다',
    author: '비욘 나티코 린데블라드',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2022/07/05'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '돈의 속성',
    author: '김승호',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/15'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
    },
  },
  {
    title: '회복탄력성',
    author: '김주환',
    quickDescription: '넘어지지 않는 법보다는 일어서는 법',
    createdDate: new Date('2023/07/20'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 8,
    },
  },
  {
    title: '타이탄의 도구들',
    author: '팀 페리스',
    quickDescription: '200명의 타이탄에게 성공 비결을 묻다',
    createdDate: new Date('2023/07/19'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      review: false,
      // rating: 8,
    },
  },
  {
    title: '기브 앤 테이크',
    author: '애덤 그렌트',
    quickDescription: '넘어지지 않는 법보다는 일어서는 법',
    createdDate: new Date('2023/07/21'),
    description:
      '자수성가 청년으로 불리우는 자청이 쓴 성공의 법칙이다. 성공에는 규칙적인 생활, 책읽기와 같은 치트키가 있고 이를 실천하느냐 보고 지나치느냐의 차이일 뿐이다',
    links: {},
    tags: {
      status: BOOK_STATUS.ONGOING,
      review: false,
      // rating: 8,
    },
  },
];
