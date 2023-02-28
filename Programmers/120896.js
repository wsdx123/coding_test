// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  /* 처음 풀이
  return [...s].sort().filter((x,i,arr) => arr.filter((el,j) => i !== j).indexOf(x) === -1).join('');
  */
  const answer = [];
  for (a of s) {
    if (s.indexOf(a) === s.lastIndexOf(a)) answer.push(a);
  }
  return answer.sort().join("");
}
