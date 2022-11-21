/** npm install -g typescript */
/** tsconfig.json 작성 */
/** 터미널에 tsc -w 입력하면 자동으로 js로 바꿔줌 */

let 이름: string = "kim";
let 어레이: string[] = ["kim"];
let 오브젝트: { name?: string } = {};
/** name 이란 속성이 있을수도 없을수도~ 오류내지말아주세여 */
type Type = string | number;
let 타입: Type = "123";
/** type 이 너무 길면 변수로 만들어서 사용 가능, 첫글자를 대문자로 만듭니다. */

function 함수(x: number): number {
  return x * 2;
}
/**  function(파라미터에 무조건 숫자) :리턴값도 무조건 숫자 {}*/

type Member = [number, boolean];
let john: Member = [123, true];
/** array에 쓸 수 있는 tuple 타입*/

type 나는오브젝트 = {
  [
    key: string
  ]: string /** 오브젝트에 타입지정해야하는 속성이 너무 많으면 이렇게*/;
};
let jane: 나는오브젝트 = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
