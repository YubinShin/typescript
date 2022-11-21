/** npm install -g typescript */
/** tsconfig.json 작성 */
/** 터미널에 tsc -w 입력하면 자동으로 js로 바꿔줌 */
var 이름 = "kim";
var 어레이 = ["kim"];
var 오브젝트 = {};
var 타입 = "123";
/** type 이 너무 길면 변수로 만들어서 사용 가능, 첫글자를 대문자로 만듭니다. */
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var jane = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
