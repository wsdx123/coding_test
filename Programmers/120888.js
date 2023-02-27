// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  /* 첫 풀이
  const answer = [];
  [...my_string].forEach((el) => {
      if(answer.indexOf(el) === -1) {
          answer.push(el);
      }
  });
  return answer.join('');
  */
  return [...new Set(my_string)].join("");
}
