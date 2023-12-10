type DPType = number[][];

type LogWordChangingParams = {
  n: number;
  m: number;
  distance: number;
  word1: string;
  word2: string;
  dp: DPType;
};

export type LogWordChangingFunction = (params: LogWordChangingParams) => void;

export type GetDpFunction = (i: number, j: number, dp: DPType) => number;

export type InsertIntoArrayFunction = <T>(
  arr: T[],
  index: number,
  newItem: T
) => T[];

export type MinimalDistanceFunction = (word1: string, word2: string) => number;
