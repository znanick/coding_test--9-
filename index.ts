import {
  GetDpFunction,
  InsertIntoArrayFunction,
  LogWordChangingFunction,
  MinimalDistanceFunction,
} from './types';

export const minimalDistance: MinimalDistanceFunction = (word1, word2) => {
  const n = word1.length;
  const m = word2.length;
  const dp = Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = Array(m);
    for (let j = 0; j < m; j++) {
      dp[i][j] = Math.min(
        getDp(i - 1, j, dp) + 1,
        getDp(i, j - 1, dp) + 1,
        getDp(i - 1, j - 1, dp) + (word1[i] === word2[j] ? 0 : 1)
      );
    }
  }

  let distance = getDp(n - 1, m - 1, dp);
  console.log(distance);

  //is not part of the task.
  logWordChanging({ n, m, distance, word1, word2, dp });

  return distance;
};

const getDp: GetDpFunction = (i, j, dp) => {
  if (i < 0 && j < 0) return 0;
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;
  return dp[i][j];
};

const logWordChanging: LogWordChangingFunction = ({
  n,
  m,
  distance,
  word1,
  word2,
  dp,
}) => {
  let row = n - 1;
  let col = m - 1;
  let curWord = Array.from(word2);

  console.log(curWord.join(''));

  while (distance > 0) {
    const replace = getDp(row - 1, col - 1, dp);
    const insert = getDp(row - 1, col, dp);
    const del = getDp(row, col - 1, dp);

    if (del < distance) {
      curWord[col] = '';
      col -= 1;
    } else if (insert < distance) {
      curWord = insertIntoArray(curWord, col + 1, word1[row]);
      row -= 1;
    } else if (replace < distance || word1[row] === word2[col]) {
      curWord[col] = word1[row];
      row -= 1;
      col -= 1;
    }

    word1[row + 1] !== word2[col + 1] && console.log(curWord.join(''));
    distance = getDp(row, col, dp);
  }
};

const insertIntoArray: InsertIntoArrayFunction = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

(() => {
  if (process.argv[2] && process.argv[3]) {
    minimalDistance(process.argv[2], process.argv[3]);
  }
})();
