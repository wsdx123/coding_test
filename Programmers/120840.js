// https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
  // 다른 풀이(Math.round사용)
  // let a = 1;
  // let b = 1;
  // for(let i=balls;i>share;i--){
  //    a *= i;
  //    b *= (i-share);
  // }
  // return Math.round(a/b);

  let a = BigInt(1);
  let b = BigInt(1);
  for (let i = balls; i > share; i--) {
    a *= BigInt(i);
    b *= BigInt(i - share);
  }
  return a / b;
}
