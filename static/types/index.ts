export type ValueOf<T> = T[keyof T];

export type WEEKLY = {
  month: number;
  week: number;
  year?: number;
};
