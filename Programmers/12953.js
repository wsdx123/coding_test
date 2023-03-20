// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  return arr.reduce((a, b) => {
    return (a * b) / gcd(a, b);
  });
}

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
