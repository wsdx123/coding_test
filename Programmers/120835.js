// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  const a = new Map();
  const tmp = emergency.slice(0);
  tmp
    .sort((x, y) => y - x)
    .forEach((el, i) => {
      a.set(el, i + 1);
    });
  return emergency.map((x) => a.get(x));
}
