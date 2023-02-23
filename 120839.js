// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  /*    처음 내
   풀이
  return rsp.split('').map((x) => {
      if(x === '0'){
          return '5';
      } else if(x === '2') {
          return '0';
      } else if(x === '5') {
          return '2';
      }
  }).join('');
  */

  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
