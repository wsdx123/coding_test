// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  // || 의 활용.
  // sort((a,b) => b-a).sort((a,b) => Math.abs(a) - Math.abs(b)) 와 같은 구문
  // 정답
  // return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

  return numlist
    .map((el) => el - n)
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(a) - Math.abs(b))
    .map((el) => el + n);
}
