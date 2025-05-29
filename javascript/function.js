/* 자바스크립트에서 함수 생성하는 방법들 */

function fn1() {
  console.log("함수 선언문 : 함수 만들기 1");
}
fn1();

const fn2 = function() {
  console.log("변수에 할당 : 함수 만들기 2");
}
fn2();

const fn3 = () => {
  console.log("변수에 할당 : 화살표 함수 만들기 3");
}
fn3();

const fn4 = new Function(`console.log("new Function() 생성자함수로 함수 만들기")`);
fn4();