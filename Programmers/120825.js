// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  /*  최초 풀이
      const temp = my_string.split('');
      const answer = [];
      for(let i=0;i<temp.length;i++){
          for(let j=0;j<n;j++){
              answer.push(temp[i]);
          }
      }
      return answer.join(''); */
  return my_string
    .split("")
    .map((x) => x.repeat(n))
    .join("");
}
