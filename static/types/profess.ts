import { WEEKLY } from '../types';

export const PROFESS_TYPE = {
  SCREEN_TIME: '스크린 타임',
  USING_APP_RANKING: '앱 사용 랭킹',
  WAKE_UP_APP: '화면 깨우기',
  SUMMARY: '총평',
  MONEY: '돈',
} as const;

type COMPARE_METADATA = {
  status: 'reduced' | 'added' | 'same';
  percent: number;
};

export type SCREEN_TIME = {
  time: {
    average: string;
    all: string;
  };
  compare: COMPARE_METADATA;
};

export type APP_NAME =
  | '인스타그램'
  | '열품타'
  | '카카오톡'
  | '유튜브'
  | '유튜브 뮤직'
  | '배달의민족'
  | '구글 애널리틱스'
  | '구글맵'
  | '뱅크샐러드'
  | '슬랙'
  | '밀리의 서재'
  | '사진'
  | '인터넷'
  | '카메라'
  | '카카오맵';

type APP = {
  name: APP_NAME;
  metadata: string | number;
};

export type USING_APP_RANKING = {
  app: APP[];
};

export type WAKE_UP_APP = {
  count: {
    average: number;
    all: number;
    compare: COMPARE_METADATA;
    max: {
      day: '월' | '화' | '수' | '목' | '금' | '토' | '일';
      count: number;
    };
  };
  firstApp: APP[];
};

export type SUMMARY = {
  summaries: string[];
};

export type MONEY = {
  cafe: {
    count: number;
    amount: number;
  };
  delivery: {
    count: number;
    amount: number;
  };
};

export type PROFESS = {
  date: WEEKLY;
  [PROFESS_TYPE.SCREEN_TIME]: SCREEN_TIME;
  [PROFESS_TYPE.USING_APP_RANKING]: USING_APP_RANKING;
  [PROFESS_TYPE.WAKE_UP_APP]: WAKE_UP_APP;
  [PROFESS_TYPE.SUMMARY]: SUMMARY;
  [PROFESS_TYPE.MONEY]: MONEY;
};
