// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  const answer = [];
  let i = 2;
  while (n !== 1) {
    if (n % i === 0) {
      n = n / i;
      answer.push(i);
      i = 2;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
}
