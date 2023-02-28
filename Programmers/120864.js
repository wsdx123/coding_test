// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  /*
  if(my_string.match(/\d/g) === null) return 0;
  return my_string.replace(/\D/g,' ').replace(/[\s]+/g,' ').split(' ').reduce((acc,cur) => {
      return acc += cur*1;
  },0);
  */
  if (my_string.match(/\d/g) === null) return 0;

  return my_string.split(/\D+/).reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
}
