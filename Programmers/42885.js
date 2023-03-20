// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let result = 0;
  let l = 0;
  let r = people.length - 1;
  while (l < r) {
    if (people[l] + people[r] > limit) {
      l++;
    } else {
      l++;
      r--;
    }
    result++;
  }
  if (l === r) result++;
  return result;
}
