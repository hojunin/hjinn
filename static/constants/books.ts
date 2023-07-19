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
    review: boolean;
    rating: number; // 1~10
  };
};

export type ValueOf<T> = T[keyof T];

export const books: BOOK[] = [
  {
    title: '역행자',
    author: '자청',
    coverImage:
      'https://image.aladin.co.kr/product/31730/9/cover500/890127258x_2.jpg',
    quickDescription: '성공의 치트키',
    createdDate: new Date('2023/07/05'),
    description: `자수성가 청년(자청)이 쓴 성공의 법칙입니다. 성공하기 위해서는 마치 게임에서 치트키를 사용해서 빠르게 성장하듯이 인생에도 이런 치트키가 있습니다. 이를 실천하느냐 보고 지나치느냐의 차이일 뿐입니다. \n\n 자청은 역행자의 7법칙이라고 명명했는데 책을 많이 읽거나 긍정적인 사고를 하는 등 우리가 흔히 읽는 자기계발서의 내용에 본인의 경험과 추가적인 내용이 합쳐져 큰 울림을 줬던 책입니다.`,
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 7,
    },
  },
  {
    title: '가진 돈을 모두 써라',
    coverImage:
      'https://image.aladin.co.kr/product/27312/63/cover500/k342732124_1.jpg',
    author: '호리에 다카후미',
    quickDescription:
      '통장잔고는 지금도 잃고 있는 수많은 기회의 총액일 뿐이다.',
    createdDate: new Date('2023/07/05'),
    description:
      '책에서 한 문장만 꼽자면, "통장잔고는 지금도 잃고 있는 수많은 기회의 총액일 뿐이다"를 선택할 것 같아요. 위에서도 언급했지만, 통장잔고라는 용어는 우리가 사용하지 않고 쌓아두거나 흘려보내는 재화인 돈과 시간, 용기를 대표합니다. \n\n 저도 돈은 쌓을수록, 시간과 용기는 흘려보낼수록 안정감을 얻는 사람 중 하나였습니다. 그렇게 안정성을 얻긴 했지만, 다 읽고 나니까 결국 안정성이라는 게 오지도 않은 미래에 대한 과투자로 평가하는 게 맞다는 생각으로 돌아섰어요. 안정성이 불필요한 건 아니지만 과투자가 아닐 만큼만 투자하는 게 현명하겠다 싶었습니다.',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/58',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 9,
    },
  },
  {
    title: '초인류',
    author: '김상균',
    coverImage:
      'https://image.aladin.co.kr/product/31800/17/cover500/8901272806_2.jpg',
    quickDescription: null,
    createdDate: new Date('2023/07/03'),
    description: '읽어보고 쓸게요!! - HJ',
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      review: false,
      rating: null,
    },
  },
  {
    title: '비상식적 성공 법칙',
    author: '간다 마사노리',
    coverImage:
      'https://image.aladin.co.kr/product/29643/15/cover500/k222838573_1.jpg',
    quickDescription: '지금 당장 종이에 목표를 적어라',
    createdDate: new Date('2023/07/01'),
    description:
      '어쩌면 성공이라는건 정답지에 가까운 자료들이 있고, 이 책이 나온지 20년이 넘었지만 비슷한 이야기를 하는 책들이 나오고 있습니다. 실천이 어렵지도 않죠. 하지만 아무리 외쳐도 열에 하나도 실천하지 않습니다. \n\n 저자는 뇌에 집중하라 말합니다. 이루고 싶은 일을 뇌에게 말하고 훈련시킨 다음 걸어가면 됩니다. \n\n 모든 일들은 자신이 이전에 깔아놓은 레일 위를 달려간다. 자기가 깔아놓은 레일을 달리는 사람과 남이 깔아놓은, 어디로 가는지도 모르는 레일을 달리는 사람의 속도는 확연히 다르다.',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 8,
    },
  },
  {
    title: '레버리지',
    author: '롭 무어',
    coverImage:
      'https://image.aladin.co.kr/product/31064/69/cover500/k842831525_2.jpg',
    quickDescription: '시간에도 효율이 있다.',
    createdDate: new Date('2023/06/05'),
    description:
      '우리에게 가치있는 일은 무엇인가. 그렇다면 가치없는 일은 무엇인가? 가치없는 일에 시간을 소모하고 있진 않은가? 설거지나 청소, 더 나아가 회사에서 일하는 것 까지 당신에게 재미와 의미를 주는가? 그렇지 않으면 그 일은 레버리지 되어야한다.\n\n 시간을 돈주고 사서 그 시간을 더 의미있는 분야에 쓴다. 레버리지는 외미없는 일을 외주로 돌린다는 뜻입니다. 그러려면 우선 나에게 중요한 일과 그렇지 않은 일을 아는 것 부터 시작합니다.',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 10,
    },
  },
  {
    title: '내가 틀릴 수도 있습니다',
    author: '비욘 나티코 린데블라드',
    coverImage:
      'https://image.aladin.co.kr/product/29269/12/cover500/k822837807_2.jpg',
    quickDescription: '누구도 완벽하지 않아요.',
    createdDate: new Date('2022/07/05'),
    description:
      '유럽에서 손꼽히는 인재로 큰 성공을 거뒀지만 불교에 귀의한 스님의 이야기입니다. 겉으로 보기엔 완벽해보이는 사람이여도, 속내를 들어보니 실수도 많이하고 그렇게 완벽하지 않았어요. \n\n 우리도 너무 완벽하려 노력할 필요 없습니다. 그저 나와 여러분을 존중하고 인정하고 사랑하면 됩니다.',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 10,
    },
  },
  {
    title: '돈의 속성',
    author: '김승호',
    coverImage:
      'https://image.aladin.co.kr/product/28884/59/cover500/s522832546_1.jpg',
    quickDescription: '돈에는 생명이 있다',
    createdDate: new Date('2023/07/15'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 6,
    },
  },
  {
    title: '회복탄력성',
    author: '김주환',
    coverImage:
      'https://image.aladin.co.kr/product/18754/45/cover500/k522635176_2.jpg',
    quickDescription: '넘어지지 않는 법보다는 일어서는 법',
    createdDate: new Date('2023/07/20'),
    description:
      '긍정적인 마음이 얼마나 인생을 좌우하는가. 넘어졌을 때 주저않지 않고 다시 일어서기 위해서는 어떻게 생각해야 하는가. \n\n 책에 이런 말이 나옵니다, 어떤 일이 “기분 좋은 일” 혹은 “나쁜 일“, ”화나는 일“, ”짜증 나는 일“이 되려면 반드시 나의 해석이 들어가야 한다. 처음부터 좋고 나쁜 일은 없습니다. 다 내가 마음먹기에 달려있습니다.',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      review: false,
      rating: 7,
    },
  },
  {
    title: '타이탄의 도구들',
    author: '팀 페리스',
    coverImage:
      'https://image.aladin.co.kr/product/29714/21/cover500/k232838895_1.jpg',
    quickDescription: '200명의 타이탄에게 성공 비결을 묻다',
    createdDate: new Date('2023/07/19'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      review: false,
      rating: null,
    },
  },
  {
    title: '기브 앤 테이크',
    author: '애덤 그렌트',
    coverImage:
      'https://image.aladin.co.kr/product/2709/7/cover500/8962605813_1.jpg',
    quickDescription: '넘어지지 않는 법보다는 일어서는 법',
    createdDate: new Date('2023/07/21'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.ONGOING,
      review: false,
      rating: null,
    },
  },
  {
    title: '규칙 없음',
    author: '리드 헤이스팅스, 에린 메이어',
    coverImage:
      'https://image.aladin.co.kr/product/24790/60/cover500/8925599635_3.jpg',
    quickDescription: '솔직하지만 무례하지 않게',
    createdDate: new Date('2023/07/21'),
    description:
      '회사에 득이 되는 거면 돈 신경 쓰지 말고 실행해라, 휴가가 필요하면 맘껏 써라',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/59',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      review: true,
      rating: 5,
    },
  },
];
