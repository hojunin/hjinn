import dayjs from 'dayjs';

type DATE = string;
export const YYYYMMDD = (date: string) => dayjs(date).format('YYYY.MM.DD');

const MIL_TO_SECOND: number = 1000;
const SECOND_TO_MINUTE: number = 60;
const MINUTE_TO_HOUR: number = 60;
const HOUR_TO_DAY: number = 24;
const DAY_TO_WEEK: number = 7;

/**
 * 날짜 객체의 월(Month)를 리턴합니다.
 * @param { DATE } date DATE 객체
 * @returns string
 */
export const getCurrentMonth = (date: DATE): string => dayjs(date).format('M');

/**
 * 날짜 객체의 주차를 리턴합니다.
 * @param { DATE } date
 * @returns string
 */
export const getWeekOfMonth = (date: DATE): number => {
  const firstDayOfMonth = dayjs(date).clone().startOf('month');
  const firstDayOfWeek = firstDayOfMonth.clone().startOf('week');
  const offset = firstDayOfMonth.diff(firstDayOfWeek, 'days');

  return Math.ceil((dayjs(date).date() + offset) / 7);
};

/**
 * 현재 날짜 기준으로, parameter로 넘어온 날짜가 지났는지를 판단합니다.
 * @param date
 * @returns boolean
 */
export const isDone = (date: DATE) => dayjs().isAfter(dayjs(date));

/**
 * 현재 날짜 기준으로, parameter로 넘어온 날짜보다 이전인지 판단합니다.
 * @param date
 * @returns boolean
 */
export const isNotDone = (date: DATE) => dayjs().isBefore(dayjs(date));

/**
 * 현재 시각과의 시간차이를 리턴합니다.
 * @param { DATE } date
 * @returns 분 단위로 리턴하고 나머지 초는 절삭됩니다. ex) 5분 35초 -> 5분으로 리턴
 */
export const getDuration = (targetDate: DATE) =>
  Math.floor(dayjs().valueOf() - dayjs(targetDate).valueOf()) /
  MIL_TO_SECOND /
  SECOND_TO_MINUTE;
/**
 * 날짜의 년도가 현재 년도인지를 리턴합니다.
 * @param { DATE } targetDate
 * @returns {boolean}
 */
const isCurrentYear = (targetDate: DATE) =>
  dayjs(targetDate).year() === dayjs().year();
/**
 * @param { DATE } date
 * @return { DATE } formatted date
 */
export const getElapsedTime = (date: DATE): DATE => {
  const duration = getDuration(date);

  switch (true) {
    case duration < 1:
      return '방금 전';

    case duration < MINUTE_TO_HOUR:
      return `${Math.floor(duration)}분 전`;

    case duration < MINUTE_TO_HOUR * HOUR_TO_DAY:
      return `${Math.floor(duration / MINUTE_TO_HOUR)}시간 전`;

    case duration < MINUTE_TO_HOUR * HOUR_TO_DAY * DAY_TO_WEEK:
      return `${Math.floor(duration / MINUTE_TO_HOUR / HOUR_TO_DAY)}일 전`;

    case duration > MINUTE_TO_HOUR * HOUR_TO_DAY * DAY_TO_WEEK:
      return isCurrentYear(date)
        ? dayjs(date).format('MM.DD')
        : dayjs(date).format('YY.MM.DD');

    default:
      return null;
  }
};
