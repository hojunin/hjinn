import { APP_NAME, PROFESS_TYPE } from './../types/profess';
import { PROFESS } from '../types/profess';

export const APP_ICON: Record<APP_NAME, string> = {
  인스타그램:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/32/5a/78/325a78e6-729f-3b8e-c5bd-6f5c91f69a03/Prod-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
  열품타:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/00/4a/b9/004ab97c-b1c2-16f6-b072-199aebfa139d/AppIcon-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp',
  카카오톡:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/1f/89/d0/1f89d070-b0cf-d81c-cd5a-bd128c279229/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-85-220.png/460x0w.webp',
  '유튜브 뮤직':
    'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6b/07/17/6b07172a-b1c1-e147-6b92-6c4d6bf3fe91/AppIcon-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220-0.png/460x0w.webp',
  배달의민족:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f3/63/b5/f363b525-faa6-97a2-0b6f-ce129936228d/AppIcon2015-1x_U007emarketing-0-4-0-85-220.png/460x0w.webp',
  유튜브:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/63/41/a8/6341a8d2-8d30-963c-aaa9-8999dbc3795d/logo_youtube_color-1x_U007emarketing-0-6-0-85-220.png/460x0w.webp',
  '구글 애널리틱스':
    'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/82/f5/93/82f5933d-ae70-043c-3582-b026f5828fac/logo_google_analytics_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/460x0w.webp',
  구글맵:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c5/b2/62/c5b26226-f04c-6365-d9df-f467cc1f6753/logo_maps_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/460x0w.webp',
  뱅크샐러드:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/f6/22/c9/f622c928-d079-fa42-20e7-bdeaac420eea/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
  슬랙: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b1/49/fe/b149fe56-fcba-3486-ab09-9dd6a18d4a4e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
  '밀리의 서재':
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/9d/86/87/9d8687fa-5a81-d441-8853-400e31be3e6d/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp',
  사진: 'https://help.apple.com/assets/63B87829CE32D578D65A85E4/63B8782ACE32D578D65A85EB/ko_KR/b27be11281d58d9597fabdfcc67a3060.png',
  카메라:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f1/7e/4d/f17e4d91-c3f4-0e8d-101b-c4d1cf041d21/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
  인터넷:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/d6/da/ed/d6daeda8-e1e0-d08e-e8fd-7fd0f401f1f3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
  카카오맵:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/da/f6/dd/daf6ddb0-821d-52ef-a95c-d250410caa36/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
};

export const PROFESSES: PROFESS[] = [
  {
    date: {
      month: 6,
      week: 4,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '4시간 42분',
        all: '32시간 59분',
      },
      compare: {
        percent: 67,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '유튜브',
          metadata: '6시간 16분',
        },
        {
          name: '인스타그램',
          metadata: '4시간 20분',
        },
        {
          name: '유튜브 뮤직',
          metadata: '3시간 54분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 11분',
        },
        {
          name: '슬랙',
          metadata: '1시간 9분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 678,
        average: 97,
        compare: {
          status: 'reduced',
          percent: 64,
        },
        max: {
          count: 118,
          day: '금',
        },
      },
      firstApp: [
        {
          name: '유튜브 뮤직',
          metadata: 94,
        },
        {
          name: '슬랙',
          metadata: 94,
        },
        {
          name: '카카오톡',
          metadata: 91,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1 + 1 + 1 + 1 + 1,
        amount: 2000 + 13000 + 2500 + 5500 + 2800 + 1800,
      },
      delivery: {
        count: 1 + 1,
        amount: 14000 + 13000,
      },
    },
  },
  {
    date: {
      month: 7,
      week: 1,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '3시간 29분',
        all: '24시간 24분',
      },
      compare: {
        percent: 26,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '4시간 51분',
        },
        {
          name: '유튜브',
          metadata: '2시간 18분',
        },
        {
          name: '밀리의 서재',
          metadata: '2시간 10분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 28분',
        },
        {
          name: '슬랙',
          metadata: '1시간 7분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 646,
        average: 92,
        compare: {
          status: 'same',
          percent: 0,
        },
        max: {
          count: 122,
          day: '금',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 100,
        },
        {
          name: '슬랙',
          metadata: 93,
        },
        {
          name: '인스타그램',
          metadata: 59,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1,
        amount: 1800,
      },
      delivery: {
        count: 0,
        amount: 0,
      },
    },
  },
  {
    date: {
      month: 7,
      week: 2,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '3시간 23분',
        all: '23시간 42분',
      },
      compare: {
        percent: 0,
        status: 'same',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '6시간 4분',
        },
        {
          name: '유튜브',
          metadata: '2시간 23분',
        },
        {
          name: '카카오톡',
          metadata: '2시간 16분',
        },
        {
          name: '밀리의 서재',
          metadata: '57분',
        },
        {
          name: '유튜브 뮤직',
          metadata: '55분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 691,
        average: 99,
        compare: {
          status: 'added',
          percent: 7,
        },
        max: {
          count: 146,
          day: '월',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 115,
        },
        {
          name: '유튜브 뮤직',
          metadata: 52,
        },
        {
          name: '구글 애널리틱스',
          metadata: 45,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1 + 1,
        amount: 6000 + 2000,
      },
      delivery: {
        count: 1,
        amount: 6500,
      },
    },
  },
  {
    date: {
      month: 7,
      week: 3,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '3시간 10분',
        all: '22시간 14분',
      },
      compare: {
        percent: 6,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '5시간 24분',
        },
        {
          name: '유튜브',
          metadata: '4시간 32분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 42분',
        },
        {
          name: '열품타',
          metadata: '1시간',
        },
        {
          name: '유튜브 뮤직',
          metadata: '36분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 632,
        average: 90,
        compare: {
          status: 'reduced',
          percent: 9,
        },
        max: {
          count: 122,
          day: '월',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 93,
        },
        {
          name: '구글 애널리틱스',
          metadata: 58,
        },
        {
          name: '유튜브 뮤직',
          metadata: 56,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '유튜브 시청시간이 크게 늘었다',
        '인스타 탐색탭의 늪에 빠진 것 같다',
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1 + 1,
        amount: 5500 + 1900,
      },
      delivery: {
        count: 1 + 1 + 1 + 1,
        amount: 13000 + 18000 + 17000 + 4500,
      },
    },
  },
  {
    date: {
      month: 7,
      week: 4,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '3시간 19분',
        all: '23시간 19분',
      },
      compare: {
        percent: 0,
        status: 'same',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '유튜브',
          metadata: '7시간 07분',
        },
        {
          name: '인스타그램',
          metadata: '4시간 29분',
        },
        {
          name: '유튜브 뮤직',
          metadata: '1시간 16분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 12분',
        },
        {
          name: '사진',
          metadata: '56분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 602,
        average: 86,
        compare: {
          status: 'same',
          percent: 0,
        },
        max: {
          count: 118,
          day: '화',
        },
      },
      firstApp: [
        {
          name: '구글 애널리틱스',
          metadata: 94,
        },
        {
          name: '카카오톡',
          metadata: 84,
        },
        {
          name: '유튜브 뮤직',
          metadata: 67,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '하루 평균 3시간의 벽을 아직 못넘고 있다.',
        '조회수의 노예야, 구글 애널리틱스좀 그만봐라',
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 0,
        amount: 0,
      },
      delivery: {
        count: 2,
        amount: 8000 + 17000,
      },
    },
  },
  {
    date: {
      month: 8,
      week: 1,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '2시간 28분',
        all: '17시간 16분',
      },
      compare: {
        percent: 26,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '유튜브',
          metadata: '5시간 28분',
        },
        {
          name: '인스타그램',
          metadata: '3시간 42분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 10분',
        },
        {
          name: '뱅크샐러드',
          metadata: '27분',
        },
        {
          name: '유튜브 뮤직',
          metadata: '20분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 564,
        average: 81,
        compare: {
          status: 'reduced',
          percent: 6,
        },
        max: {
          count: 144,
          day: '월',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 79,
        },
        {
          name: '유튜브 뮤직',
          metadata: 72,
        },
        {
          name: '구글 애널리틱스',
          metadata: 58,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '데이터를 의식하니까 확실히 스마트폰을 덜 쓰게된다.',
        '인스타, 유튜브는 줄었지만 더 줄여야한다 (2시간대?)',
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 2,
        amount: 4800 + 2000,
      },
      delivery: {
        count: 0,
        amount: 0,
      },
    },
  },

  {
    date: {
      month: 8,
      week: 2,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '4시간 28분',
        all: '31시간 20분',
      },
      compare: {
        percent: 81,
        status: 'added',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '4시간 41분',
        },
        {
          name: '유튜브',
          metadata: '4시간 21분',
        },
        {
          name: '구글맵',
          metadata: '3시간 20분',
        },
        {
          name: '그랩',
          metadata: '2시간 54분',
        },
        {
          name: '카카오톡',
          metadata: '2시간 38분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 1150,
        average: 164,
        compare: {
          status: 'added',
          percent: 104,
        },
        max: {
          count: 293,
          day: '화',
        },
      },
      firstApp: [
        {
          name: '구글맵',
          metadata: 182,
        },
        {
          name: '카카오톡',
          metadata: 161,
        },
        {
          name: '인스타그램',
          metadata: 100,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '베트남 여행 1주차. 아무리 여행중이라지만 휴대폰을 너무 많이봤다. 구글맵, 그랩이 꽤 많다.',
        '쫌쫌따리로 SNS를 너무 많이 했다. 디지털 디톡스 했어야 했는데..',
      ],
    },
  },
  {
    date: {
      month: 8,
      week: 3,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '5시간 09분',
        all: '36시간 03분',
      },
      compare: {
        percent: 15,
        status: 'added',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '유튜브',
          metadata: '9시간 45분',
        },
        {
          name: '구글맵',
          metadata: '5시간 44분',
        },
        {
          name: '인스타그램',
          metadata: '5시간 08분',
        },
        {
          name: '카카오톡',
          metadata: '3시간 37분',
        },
        {
          name: '인터넷',
          metadata: '1시간 17분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 1031,
        average: 147,
        compare: {
          status: 'reduced',
          percent: 10,
        },
        max: {
          count: 196,
          day: '목',
        },
      },
      firstApp: [
        {
          name: '구글맵',
          metadata: 268,
        },
        {
          name: '카카오톡',
          metadata: 230,
        },
        {
          name: '카메라',
          metadata: 98,
        },
      ],
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '본격적으로 여행만 하다보니 구글맵을 많이 봤다.',
        '밤에 책읽기만 하니 적적해서 유튜브나 인스타그램을 봤다.',
      ],
    },
  },
  {
    date: {
      month: 8,
      week: 4,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '3시간 15분',
        all: '22시간 50분',
      },
      compare: {
        percent: 37,
        status: 'added',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '4시간 48분',
        },
        {
          name: '유튜브',
          metadata: '4시간 26분',
        },
        {
          name: '구글맵',
          metadata: '2시간 16분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 25분',
        },
        {
          name: '인터넷',
          metadata: '41분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 868,
        average: 124,
        compare: {
          status: 'reduced',
          percent: 15,
        },
        max: {
          count: 279,
          day: '일',
        },
      },
      firstApp: [
        {
          name: '구글맵',
          metadata: 174,
        },
        {
          name: '카카오톡',
          metadata: 112,
        },
        {
          name: '인스타그램',
          metadata: 90,
        },
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 3,
        amount: 6000,
      },
      delivery: {
        count: 2,
        amount: 14000 + 8900,
      },
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '여행의 영향이 줄어 전반적인 수치가 돌아오는 중이다.',
        '핑계를 대며 열심히 살지 않았다.',
        '이직에 힘을 쏟을 시기인 만큼 시간투자하지 않았다',
      ],
    },
  },
  {
    date: {
      month: 9,
      week: 1,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '3시간 34분',
        all: '25시간 2분',
      },
      compare: {
        percent: 10,
        status: 'added',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '유튜브',
          metadata: '8시간 16분',
        },
        {
          name: '인스타그램',
          metadata: '5시간 57분',
        },
        {
          name: '인터넷',
          metadata: '1시간 40분',
        },
        {
          name: '카카오톡',
          metadata: '1시간 32분',
        },
        {
          name: '카카오맵',
          metadata: '54분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 499,
        average: 71,
        compare: {
          status: 'reduced',
          percent: 43,
        },
        max: {
          count: 101,
          day: '화',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 84,
        },
        {
          name: '인스타그램',
          metadata: 56,
        },
        {
          name: '카카오맵',
          metadata: 59,
        },
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 0,
        amount: 0,
      },
      delivery: {
        count: 1,
        amount: 29000,
      },
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '2박 3일 예비군 훈련 동안 모두가 휴대폰 쳐다볼 때 우직하게 책만 본 효과가 톡톡히 드러났다!!',
        '확실히 모르는 곳 가면 지도 어플에서 눈을 땔 수 없다.',
        '과제 전형을 위해 스터디 카페를 갔더니 휴대폰을 거의 확인하지 않았다',
        '배달을 거의 시켜먹지 않는 사람으로 변하고 있다.',
      ],
    },
  },
  {
    date: {
      month: 9,
      week: 2,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '1시간 47분',
        all: '12시간 30분',
      },
      compare: {
        percent: 50,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '3시간 12분',
        },
        {
          name: '유튜브',
          metadata: '3시간',
        },
        {
          name: '카카오톡',
          metadata: '1시간',
        },
        {
          name: '뱅크샐러드',
          metadata: '23분',
        },
        {
          name: '배달의민족',
          metadata: '21분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 465,
        average: 66,
        compare: {
          status: 'reduced',
          percent: 7,
        },
        max: {
          count: 109,
          day: '금',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 86,
        },
        {
          name: '인스타그램',
          metadata: 63,
        },
        {
          name: '유튜브 뮤직',
          metadata: 45,
        },
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1 + 1,
        amount: 1800 + 2100,
      },
      delivery: {
        count: 0,
        amount: 0,
      },
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '휴대폰 사용량이 획기적으로 줄었다. 과제 테스트를 하느라 집중한 영향이 크다',
        '휴대폰으로 하는 행위가 맘에들지 않는다. 꽤 변하긴 했지만 바뀔 구석이 많다',
        '이번 주엔 모든 식사 집밥 해먹기에 성공했다.',
      ],
    },
  },
  {
    date: {
      month: 9,
      week: 3,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '1시간 32분',
        all: '10시간 47분',
      },
      compare: {
        percent: 14,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '2시간 3분',
        },
        {
          name: '유튜브',
          metadata: '1시간 43분',
        },
        {
          name: '카카오톡',
          metadata: '53분',
        },
        {
          name: '단축어',
          metadata: '57분',
        },
        {
          name: '카카오맵',
          metadata: '53분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 486,
        average: 70,
        compare: {
          status: 'added',
          percent: 5,
        },
        max: {
          count: 92,
          day: '토',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 77,
        },
        {
          name: '인스타그램',
          metadata: 60,
        },
        {
          name: '카카오맵',
          metadata: 25,
        },
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1 + 1,
        amount: 6000 + 2200,
      },
      delivery: {
        count: 1,
        amount: 29000,
      },
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '휴대폰 사용량이 또 줄었다. 이제 쓸데없이 휴대폰을 켜지 말자는 생각이 내재화되었다.',
        '이제 커피에 대한 소비량 체크가 의미있나 싶다. 회사 다닐때나 유효한 옵션인데',
      ],
    },
  },
  {
    date: {
      month: 9,
      week: 4,
      year: 2023,
    },
    [PROFESS_TYPE.SCREEN_TIME]: {
      time: {
        average: '1시간 24분',
        all: '9시간 54분',
      },
      compare: {
        percent: 8,
        status: 'reduced',
      },
    },
    [PROFESS_TYPE.USING_APP_RANKING]: {
      app: [
        {
          name: '인스타그램',
          metadata: '1시간 23분',
        },
        {
          name: '유튜브',
          metadata: '1시간 22분',
        },
        {
          name: '카카오톡',
          metadata: '50분',
        },
        {
          name: '뱅크샐러드',
          metadata: '39분',
        },
        {
          name: '카카오맵',
          metadata: '23분',
        },
      ],
    },
    [PROFESS_TYPE.WAKE_UP_APP]: {
      count: {
        all: 564,
        average: 81,
        compare: {
          status: 'added',
          percent: 15,
        },
        max: {
          count: 128,
          day: '월',
        },
      },
      firstApp: [
        {
          name: '카카오톡',
          metadata: 75,
        },
        {
          name: '인스타그램',
          metadata: 65,
        },
        {
          name: '유튜브 뮤직',
          metadata: 61,
        },
      ],
    },
    [PROFESS_TYPE.MONEY]: {
      cafe: {
        count: 1 + 1,
        amount: 5000 + 2000,
      },
      delivery: {
        count: 1,
        amount: 8000,
      },
    },
    [PROFESS_TYPE.SUMMARY]: {
      summaries: [
        '휴대폰 사용량에 대한 인식이 습관이 된 것 같다😎',
        '인스타를 안해보니까 딱히 문제 없다. 줄여볼 수 있을 것 같다.',
      ],
    },
  },
];
