// https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
  const regex = new RegExp(`${letter}`, "g");
  return my_string.replace(regex, "");
}
