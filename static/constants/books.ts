import { BOOK, BOOK_STATUS } from '../types/books';

export const books: BOOK[] = [
  {
    title: 'The Black Book, 검은 감정',
    author: '설레다(최민정)',
    coverImage:
      'https://image.aladin.co.kr/product/29747/63/cover500/k122839722_1.jpg',
    quickDescription: '솔직하지 않고 싶은 감정에 솔직해져요',
    createdDate: new Date('2023/07/28'),
    description: `생각보다 불편한 감정이 많아요. 크래파스로 벅벅 문질러서 안보이게 하고 싶은 슬픔이나 괴로움, 막막함 같은 감정들이요. 마주하고도 모른채하고 싶은. \n\n 하지만 만나고 싶지 않다고 조우하지 않을 수 없는 감정들인걸 우리는 알고 있습니다. 해결할 순 없더라도, 한 번 만나보는건 어떨까요?`,
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/73',
      instagram:
        'https://www.instagram.com/p/CvEn4C3RYnP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 9,
    },
  },
  {
    title: '사람은 무엇으로 사는가',
    author: '톨스토이',
    coverImage:
      'https://image.aladin.co.kr/product/6209/14/cover500/8931009526_1.jpg',
    quickDescription: '사람은 사랑으로 산다.',
    createdDate: new Date('2023/07/22'),
    description:
      '톨스토이의 단편들을 모아놓은 소설집입니다. 기독교 색채가 짙은 책이지만 마치 우화집을 읽는 듯한 전개와 그림책을 보는듯한 선명한 묘사로 사랑이라는 궁극의 가치를 제대로 전달받을 수 있었습니다. \n\n 지금 이 순간에 최산을 다해 사랑하라, 톨스토이가 여러 단편을 통해 꼭 말하고 싶었던 가치라고 생각해요. 어떤 물질이나 손에 쥘 수 없는 가치는 인간을 살게하지 않으니까요.',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/70',
      instagram:
        'https://www.instagram.com/p/CvE4nXDx42A/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 9,
    },
  },
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
      rating: 7,
    },
  },
  {
    title: '가진 돈은 모두 써라',
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
      instagram:
        'https://www.instagram.com/p/CvW6tskRtn8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 9,
    },
  },
  {
    title: '운의 알고리즘',
    author: '현존 정희도',
    coverImage:
      'https://image.aladin.co.kr/product/29082/78/cover500/k872836650_1.jpg',
    quickDescription: '운은 내가 만드는거야!',
    createdDate: new Date('2022/07/01'),
    description:
      '옮길 운(運) 에 목숨 명(命), 내 목숨을 내가 운행한다는 뜻입니다. 확률과 비슷한 수동적인 개념으로 생각하고 있었는데, 내가 조작할 수 있는 능동적인 개념이었던 것이죠\n\n이 책에는 사람들이 오해하고 있는 운이나 운명같이 뜬구름 잡는 개념을 이해하기 쉽게 설명하기 위한 작가의 노력이 묻어있습니다. 그 중 자동차와 도로를 활용한 비유가 가장 와닿았습니다.엑셀에 발만 가져다 대도 100m는 나갈 수 있는 레이싱카가 늪지대 위에 있다면, 아무리 엑셀을 밟고 기어를 넣어도 늪으로 빨려들어갈 뿐 앞으로 나아가지 못합니다. 최대한 빨리 아우토반으로 옮겨야겠지요. \n\n 사실 아직도 나의 차종이 뭔지, 어떤 환경에서 허우적대고 있는지 명확히 모르지만, 이 사실을 자각하고 살다보니 정신승리나 합리화 따위를 덜 하게 된 것 같습니다.',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 8,
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
      rating: 8,
    },
  },
  {
    title: '레버리지',
    author: '롭 무어',
    coverImage:
      'https://image.aladin.co.kr/product/31064/69/cover500/k842831525_2.jpg',
    quickDescription: '시간에도 효율이 있다.',
    createdDate: new Date('2023/08/01'),
    description:
      '우리에게 가치있는 일은 무엇인가. 그렇다면 가치없는 일은 무엇인가? 가치없는 일에 시간을 소모하고 있진 않은가? 설거지나 청소, 더 나아가 회사에서 일하는 것 까지 당신에게 재미와 의미를 주는가? 그렇지 않으면 그 일은 레버리지 되어야한다.\n\n 시간을 돈주고 사서 그 시간을 더 의미있는 분야에 쓴다. 레버리지는 외미없는 일을 외주로 돌린다는 뜻입니다. 그러려면 우선 나에게 중요한 일과 그렇지 않은 일을 아는 것 부터 시작합니다.',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/77',
      instagram:
        'https://www.instagram.com/p/CvMS_MoRMh8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 10,
    },
  },
  {
    title: '내가 틀릴 수도 있습니다',
    author: '비욘 나티코 린데블라드',
    coverImage:
      'https://image.aladin.co.kr/product/29269/12/cover500/k822837807_2.jpg',
    quickDescription: '누구도 완벽하지 않아요.',
    createdDate: new Date('2023/07/15'),
    description:
      '유럽에서 손꼽히는 인재로 큰 성공을 거뒀지만 불교에 귀의한 스님의 이야기입니다. 겉으로 보기엔 완벽해보이는 사람이여도, 속내를 들어보니 실수도 많이하고 그렇게 완벽하지 않았어요. \n\n 우리도 너무 완벽하려 노력할 필요 없습니다. 그저 나와 여러분을 존중하고 인정하고 사랑하면 됩니다.',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/74',
      instagram:
        'https://www.instagram.com/p/CvC1LhgRzP0/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 10,
    },
  },
  {
    title: '실리콘밸리의 팀장들',
    author: '킴 스콧',
    coverImage:
      'https://image.aladin.co.kr/product/19389/8/cover500/8935212822_1.jpg',
    quickDescription: '권력과 통제는 허상이다',
    createdDate: new Date('2023/06/15'),
    description:
      "살면서 꼭 리더가 될 필요는 없습니다. 하지만 아무리 스스로의 역량이 뛰어나도 여럿이 힘을 합쳐야만 해결할 수 있는 거대하고 어려운 문제들이 많아요. 국제기구가 해결 중인 문제를 예로 들어볼게요. UN이 풀고 있는 문제는 세계평화입니다. 어느 누구도 홀로는 이 거대하고 추상화된 문제를 해결할 수 없습니다. 비슷한 생각과 열정을 가진 사람들이 모여야 겨우 출발할 수 있죠.\n\n 완전한 솔직함(Radical Candor), 책의 진짜 제목이죠. 42p에서 이 부분을 설명하는데, 넷플릭스의 규칙 없음이라는 책에서 언급된 '솔직하지만 무례하지 않게'가 오버랩되었어요. 결국 위선 없이 솔직히 말해야 하지만 의사표현에 있어서는 겸손하고 무례하지 않아야 한다는 점에서요.",
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/69',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 6,
    },
  },
  {
    title: '돈의 속성',
    author: '김승호',
    coverImage:
      'https://image.aladin.co.kr/product/28884/59/cover500/s522832546_1.jpg',
    quickDescription: '돈에는 생명이 있다',
    createdDate: new Date('2022/06/15'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
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
      rating: 7,
    },
  },
  {
    title: '타이탄의 도구들',
    author: '팀 페리스',
    coverImage:
      'https://image.aladin.co.kr/product/29714/21/cover500/k232838895_1.jpg',
    quickDescription: '200명의 타이탄에게 성공 비결을 묻다',
    createdDate: new Date('2023/08/29'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      rating: null,
    },
  },
  {
    title: '기브 앤 테이크',
    author: '애덤 그렌트',
    coverImage:
      'https://image.aladin.co.kr/product/2709/7/cover500/8962605813_1.jpg',
    quickDescription: '현명한 기버가 됩시다',
    createdDate: new Date('2023/08/10'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      rating: null,
    },
  },
  {
    title: '규칙 없음',
    author: '리드 헤이스팅스, 에린 메이어',
    coverImage:
      'https://image.aladin.co.kr/product/24790/60/cover500/8925599635_3.jpg',
    quickDescription: '솔직하지만 무례하지 않게',
    createdDate: new Date('2022/07/21'),
    description:
      '회사에 득이 되는 거면 돈 신경 쓰지 말고 실행해라, 휴가가 필요하면 맘껏 써라. 이런 자유로운 문화는 요즘 스타트업 특 이라고 해도 될 정도인데 넷플릭스에서 유효한 이유는 그럴만한 사람들이기 때문일지도 모릅니다. ',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/59',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 5,
    },
  },
  {
    title: '우리는 언젠가 만난다',
    author: '채사장',
    coverImage:
      'https://image.aladin.co.kr/product/17870/87/cover500/s942639906_2.jpg',
    quickDescription: '너는 그 자체로 하나의 큰 세계다.',
    createdDate: new Date('2021/07/21'),
    description:
      '들어가는 말에는 다음과 같은 말이 나옵니다, 모든 섬이 언제나 바다의 심연에서 만나듯, 이 책의 모든 이야기는 당신의 마음 안에서 서로 관걔맺고,언젠가는 하나로 만나게 될 것이다. "나"라는 존재와 그 여집합으로 구성된 이 세계는 살아보니 정말 다양한 요소로 이루어져 있습니다. 책에서는 나와 당신의 만남을 세계와 세계가 만난다고 했는데, 이 말은 굉장히 중의적으로 다가왔습니다. 우리는 책에 소개된 요소 이외에도 정말 다양한 어떤것들과 관계를 맺고 있고 언젠가 하나의 점에서 만납니다.\n\n언어와 책에 대한 관점은 특히 나를 반성하게 했습니다. 책이 주는 좋은 이미지에 소모당해버린 시간들이 아깝기도 하고, 이제야 고전을 읽어볼까 생각도 들고. 당연히 뭐 아직도 우매함의 봉우리에서 외치는 한마디일 수도 있고.\n\n처음 읽었을 때 이 책은 어려운 철학을 매너를 높힌 톤으로 두서없이 설명한 책이었습니다. 물론 3번째 읽었을 때에도 별다른 차이점이 없긴 했는데, 한가지 이해한 점은 내 주변 모든것들과 나는 닿아있고, 이들과 외연이라는 단어를 쓰기에 알맞습니다.먼 훗날 이것저것에 대해 경험하고 나면 "나"라는 범주에 모두가 포함되는, 그리고 그 범주가 다시 나로 모아지며 만나게 되는. 설명하자니 어렵고 우스운 관계라는 점입니다.',
    links: {},
    tags: {
      status: BOOK_STATUS.N,
      rating: 10,
    },
  },
  {
    title: '미드나잇 라이브러리',
    author: '매트 헤이그',
    coverImage:
      'https://image.aladin.co.kr/product/30590/78/cover500/k662830816_2.jpg',
    quickDescription: '분명 그게 최선이었을꺼야!',
    createdDate: new Date('2022/07/21'),
    description:
      '저는 아직도 영앤 리치 핸섬가이가 되면 진짜 행복하겠다고 생각합니다. 물론 한 번도 그런 사람이 돼본 적이 없어서(🙄..) 진짜로 행복할지 아닌지는 잘 몰라요. \n\n 주인공이 여러 인생을 돌며 누가봐도 성공한 스타의 삶도 살아보고 하고 싶은 연구도 하는 삶을 살아봤지만, 생각보다 그렇게 행복하진 않았으니 진짜 그런 사람이 되면 알 수 있겠죠?\n\n우리는 한번 내린 반대 결정의 인생을 살 수 없습니다. 미련이 남든 후회를 하든 결과는 변하지 않아요. 그저 선택만 해도 인생이 통째로 뒤바뀌는 주인공 노라의 결정이나 당장 내일 점심으로 먹을 메뉴를 정하는 나의 결정이나 똑같아요. 한번 내린 결정은 변하지 않습니다.\n\n아마 한 몇 년 뒤의 제가 과거의 오늘을 돌아보며 아마 비슷한 말을 하고 있을 것 같아요. 지금은 잘 모르겠지만, 지금에 할 수 있는 최고의 선택을 했겠지 하고요.',
    links: {},
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 6,
    },
  },
  {
    title: '초인류',
    author: '김상균',
    coverImage:
      'https://image.aladin.co.kr/product/31800/17/cover500/8901272806_2.jpg',
    quickDescription: '인류는 인공적으로 진화했다',
    createdDate: new Date('2023/09/03'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      rating: null,
    },
  },
  {
    title: '클루지',
    author: '개리 마커스',
    coverImage:
      'https://image.aladin.co.kr/product/31724/75/cover500/8901272083_1.jpg',
    quickDescription: null,
    createdDate: new Date('2023/08/20'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      rating: null,
    },
  },
  {
    title: '누구도 나를 파괴할 수 없다',
    author: '데이비드 고긴스',
    coverImage:
      'https://image.aladin.co.kr/product/31910/92/cover500/8901273160_1.jpg',
    quickDescription: "당신은 더 대단한 일을 할 수 있다.",
    createdDate: new Date('2023/08/09'),
    description: '어쩌면 우리는 한계를 정해놓고 그 한계에 도달했을 때 스스로를 격하게 위로하고 있을지 모릅니다. ',
    links: {
      brunch: "https://brunch.co.kr/@dlsghwns/87"
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 6,
    },
  },
  {
    title: '인스타 브레인',
    author: '안데르스 한센',
    coverImage:
      'https://image.aladin.co.kr/product/23973/11/cover500/k422639014_2.jpg',
    quickDescription: '인간의 뇌는 수렵시절에 머물러있다.',
    createdDate: new Date('2023/08/02'),
    description: ` 지금의 우리가 느끼는 본능, 욕구, 불안, 스트레스 등은 어디서 기원한걸까요? 누가 가르쳐주지 않았음에도 우리는 저런 감정을 느낄 수 있습니다. 인스타 브레인의 저자 안데르스 한센은 이 모든건 선조로부터 물려받았다고 생각합니다. 현대인이 느끼는 이러한 감정들은 그때 학습된 뇌가 현대의 환경에서 느끼는 인지부조화에서 왔다는 것입니다. \n\n  결국 원시 시대의 뇌를 가지고 있다고 해서 그 생활양식으로 회귀하는게 아닌 부조화를 줄이기 위해 뇌를 이해하고 내 감정과 행동을 다시 한번 생각해보게 하는 좋은 책이었습니다.`,
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/81',
      instagram:
        'https://www.instagram.com/p/CvdsoV7RUeX/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 8,
    },
  },
  {
    title: '우는 법을 잃어버린 당신에게',
    author: '김영아',
    coverImage:null,
    quickDescription: '동화책으로 배우는 심리학',
    createdDate: new Date('2023/08/16'),
    description: ` 나를 분명 잘 알고 있다고 생각하는데 막상 마주치면 두려워 무너집니다. 이는 우리가 무능해서가 아니라 잘 몰라서에요. 어쨋든 살아갈 방법은 있고 우리는 영리하게 파훼해나가면 됩니다. 그림책으로 심리학을 이해하고 실천해요`,
    links: {
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 8,
    },
  },
  {
    title: '독서의 기록',
    author: '안예진',
    coverImage:null,
    quickDescription: '슬기로운 독서생활',
    createdDate: new Date('2023/08/15'),
    description: ` 분명 모두가 가진 불안감이 있습니다. 지금 다니는 회사, 직함, 직업 등이 사라지면 나도 사라지는걸까? 저자는 그 해답을 책에서 찾습니다. 그리고 감사하게도 책 컨텐츠 생산자라는 실존적 해답도 얻어내요. 책으로 풀린 저자의 인생을 살펴봐요.`,
    links: {
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 6
    },
  },
  {
    title: '아주 세속적인 지혜',
    author: '발타사르 그라시안',
    coverImage:null,
    quickDescription: '진짜 필요한 지햬',
    createdDate: new Date('2023/08/15'),
    description: ` 실속과 명분은 아주 재미있는 관계에 있습니다. 둘 다 사람을 살기합니다. 그리고 상호 배타적이면서 상호 보완적입니다. 보통의 책들은 좋은 말을 하느라 명분을 챙기라 하지만, 실속을 챙기지 않을 수 없습니다. 명분과 실리, 사실 두마리 토끼를 다 놓칠 순 없습니다.  `,
    links: {
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 9
    },
  },
  {
    title: '왜 일하는가',
    author: '이나모리 가즈오',
    coverImage:
      'https://image.aladin.co.kr/product/26913/35/cover500/k102730602_1.jpg',
    quickDescription: '일은 그 자체로 고결한 행위입니다.',
    createdDate: new Date('2023/08/05'),
    description:
      '일은 돈만을 위한 것이 아니라 내적 성장과 가치 창출을 통해 진정한 의미를 찾아가는 과정으로 정의를 내릴 수도 있네요. \n\n 허드렛일이나 반복업무같은 작은 일들도 곧은 마음가짐과 오랜 노력을 통해 깊이 있는 인격을 형성하며 성공으로 이끌어 갈 수 있다는 말에 저자의 마음가짐 또한 엿볼 수 있었습니다. \n\n 요즘같은 조용한 사직 시대에 공감을 얻을만한 책은 아닐지 모릅니다. 하지만 반대로 일을 통해 내가 원하는 목표를 찾고 내면을 성장시키는 데는 큰 도움이 될 것으로 생각합니다.',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/83',
      instagram:
        'https://www.instagram.com/p/CvjncieOnAA/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 7,
    },
  },
  {
    title: '상처 받지 않는 영혼',
    author: '마이클 싱어',
    coverImage:
      'https://image.aladin.co.kr/product/4030/24/cover500/8998075083_2.jpg',
    quickDescription: null,
    createdDate: new Date('2023/08/28'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      rating: null,
    },
  },
  {
    title: '모든 삶은 흐른다',
    author: '로랑스 드빌레르',
    coverImage:
      'https://image.aladin.co.kr/product/31381/47/cover500/k292832005_1.jpg',
    quickDescription: '같은 파도는 결코 다시 오지 않는다',
    createdDate: new Date('2023/07/28'),
    description:
      '바다와 인생을 비유한 책에서 얻은 지혜를 소개해요. 바다의 무한한 얼굴이 우리 인생처럼 다양합니다.\n\n한 마디로, 인생의 여러 단계에 대한 해답을 바다와 비교하여 제시하는 책입니다. 결국엔 나 자신이 신념을 굳게 세우고 올바른 길을 걸어가는 것이 중요하다는 말을 하고 싶은게 아닐까요?',
    links: {
      brunch: 'https://brunch.co.kr/@dlsghwns/79',
      instagram:
        'https://www.instagram.com/p/CvWuHiSxxsx/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    tags: {
      status: BOOK_STATUS.DONE,
      rating: 6,
    },
  },
  {
    title: '인류 밖에서 찾은 완벽한 리더들',
    author: '장이권',
    coverImage:
      'https://image.aladin.co.kr/product/30818/95/cover500/8950991446_1.jpg',
    quickDescription: null,
    createdDate: new Date('2023/07/28'),
    description: null,
    links: {},
    tags: {
      status: BOOK_STATUS.NOTYET,
      rating: null,
    },
  },
];
