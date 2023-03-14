// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  const a = score.map((el) => (el[0] + el[1]) / 2);
  const b = a.slice(0).sort((a, b) => b - a);
  return a.map((el) => b.indexOf(el) + 1);
}
