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

  뱅크샐러드:
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/f6/22/c9/f622c928-d079-fa42-20e7-bdeaac420eea/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
  슬랙: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b1/49/fe/b149fe56-fcba-3486-ab09-9dd6a18d4a4e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
  '밀리의 서재':
    'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/9d/86/87/9d8687fa-5a81-d441-8853-400e31be3e6d/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp',
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
  },
];
