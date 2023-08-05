import { ValueOf } from '@site/build/types';
const HOST = 'https://api.hojunin.com';
interface FetcherRequest {
  path: string;
  config?: FetchConfig;
  host?: string;
}

export const HTTP_METHOD_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

interface FetchConfig {
  method: ValueOf<typeof HTTP_METHOD_TYPE>;
  headers?: any;
  mode?: 'cors' | 'navigate' | 'no-cors' | 'same-origin';
  cache?:
    | 'default'
    | 'force-cache'
    | 'no-cache'
    | 'no-store'
    | 'only-if-cached'
    | 'reload';
  body?: any;
}

const defaultConfig: FetchConfig = {
  method: HTTP_METHOD_TYPE.GET,
  cache: 'default', // SSR 타입에 따라 분기
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * fetchApi 활용을 위한 fetcher 모듈
 * API 요청에 성공하면 response 객체를. 아니면 falsy한 값을 리턴한다.
 * @param {string} path
 * @param {FetcherRequest?} config
 * @returns {Promise<T>}
 */
export const fetcher = async <T>({
  path,
  config,
}: FetcherRequest): Promise<T> => {
  try {
    const response = await fetch(`${HOST}/${path}`, {
      ...defaultConfig,
      ...config,
      credentials: 'include',
    });

    console.log('🚀 ~ file: fetcher.ts:54 ~ response:', response);
    if (response.ok) {
      return await response.json();
    }

    return handleError(response.status);
  } catch (error) {
    throw error;
  }
};

const handleError = (status: number) => {
  switch (status) {
    case 401:
      throw new Error('인증 문제 발생');
    case 404:
      throw new Error('데이터를 찾을 수 없음');
    case 500:
      throw new Error('서버가 응답하지 않음');
    case 503:
      throw new Error('타임아웃');
    default:
      throw new Error('데이터 페칭 실패');
  }
};
