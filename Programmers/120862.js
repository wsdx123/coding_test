// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  /* 최초 풀이
  const plus = numbers.filter((x) => x >= 0).sort((x,y) => y-x);
  const minus = numbers.filter((x) => x<0).sort((x,y) => x-y);
  if(plus.length > 1 && minus.length > 1) {
      return plus[0]*plus[1] > minus[0]*minus[1] ? plus[0]*plus[1] : minus[0]*minus[1];    
  } else if(plus.length <= 1 && minus.length <= 1) {
      return minus[0]*plus[0];
  } else if(plus.length <= 1) {
      return minus[0]*minus[1];
  } else if(minus.length <= 1) {
      return plus[0]*plus[1];
  } */
  numbers.sort((x, y) => x - y);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
