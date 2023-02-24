// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  /* 최초 풀이
  const answer = my_string.split('');
  const tmp = answer[num1];
  answer[num1] = answer[num2];
  answer[num2] = tmp;
  return answer.join('');
  */
  const answer = my_string.split("");
  [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
  return answer.join("");
}
