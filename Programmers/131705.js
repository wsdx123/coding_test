// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  return combo(number, 3)
    .map((el) => el.reduce((a, b) => a + b, 0))
    .filter((el) => el === 0).length;
}

const combo = (arr, pick) => {
  const result = [];
  if (pick === 1) return arr.map((el) => [el]);

  arr.forEach((fix, index, origin) => {
    const rest = origin.slice(index + 1);
    const small = combo(rest, pick - 1);
    const attached = small.map((el) => [fix, ...el]);
    result.push(...attached);
  });
  return result;
};
