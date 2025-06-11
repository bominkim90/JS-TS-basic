var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myname = 'lee';
myname = 'kim'; // 타입 추론 (변수에 초기값을 넣을때, 타입을 명시적으로 기입하지 않았어도, 변수 초기값으로 타입을 자동 추론함)
// let student = {
//   name : 'john',
//   course : 'typescript',
//   score : 100,
//   grade : function() {
//     console.log('A');
//   }
// }
// student.name = 'kim';
// student.name = 100; // 에러
// student.score = 90;
// student.score = '점수'; // 에러
// 변수의 데이터 타입 명시
// let stdId: number = '1111'; // 컴파일 에러 (문법적 에러)
var stdId = 1111;
var stdName = 'kim';
var gender = 'male';
var course = 'Typescript';
var completed = false;
// 함수의 데이터 타입 명시(매개변수, 리턴값)
function plus(a, b) {
    // return a + b;
}
// function getInfo(id: number) : {
//   stdId: number;
//   stdName:String;
//   gender:String;
//   course:String;
//   completed:boolean;
// }
// {
//   return null;
// }
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
// 인터페이스 구현
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 4213;
        this.stdName = 'ddd';
        this.gender = 'male';
        this.course = 'js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
// let myInstance = new MyStudent();
// myInstance.setName('new');
function getInfo(id) {
    return {
        stdId: id,
        // stdName: 'lee',
        gender: 'female',
        course: 'typescript',
        completed: false
    };
}
// console.log(getInfo(1234));
function setInfo(student) {
    console.log(student);
}
var std = {
    stdId: 2222,
    stdName: 'park',
    gender: 'male',
    course: 'node.js',
    completed: true
};
// setInfo(std);
/*
  리터럴 타입
  값 그대로를 타입으로 갖는 타입
*/
var num = 1; // 숫자 리터럴
var str = 'kim'; // 문자 리터럴
var user = {
    name: 'john',
    age: 25
};
// any 타입
var anyVal = 100;
anyVal = 200;
anyVal = 'kim';
anyVal = true;
// 유니온 타입 : 공용체
var unionVal;
unionVal = 1;
unionVal = 'lee';
var numStr = 100;
var item;
item = numStr;
function convertToString(val) {
    // 타입 가드
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    var result = String(val);
    console.log(result + " : " + typeof result);
    return result;
}
function convertToNumber(val) {
    var result = Number(val);
    console.log(result + " : " + typeof result);
    return result;
}
// convertToString(numStr);
// convertToNumber(numStr);
/* Array */
var numbers = [1, 2, 3, 4, 5];
var fruits = ['apple', 'banana', 'strawberry'];
// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
/* 배열의 유니온 타입 */
var mixedArray = [1, 'two', 3, 'four'];
// for(let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }
/*
  Tuple
  타입의 순서가 정해져 있다.
*/
var greeting = [1, 'hello', true];
// for(let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }
/* Spread 연산자 */
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
