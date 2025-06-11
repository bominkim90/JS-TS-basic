let myname = 'lee';
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
let stdId: number = 1111;
let stdName:string = 'kim';
let gender:string = 'male';
let course:string = 'Typescript';
let completed:boolean = false;


// 함수의 데이터 타입 명시(매개변수, 리턴값)
function plus(a : number, b? : number) : void 
{
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
enum GenderType {
  Male,
  Female
}

// 인터페이스
interface Student {
  stdId? : number;
  stdName? : String; // 옵셔널 (사용시 선택사항)
  gender? : 'male' | 'female';
  course : String;
  completed? : boolean;
  setName? : (name : string) => void;
  getName? : () => string;
}

// 인터페이스 구현
class MyStudent implements Student {
  stdId = 4213;
  stdName = 'ddd';
  gender : 'male' | 'female' = 'male';
  course = 'js';
  completed = true;

  setName(name : string) : void
  {
    this.stdName = name;
    console.log('이름 설정 : ' + this.stdName);
  }
}
// let myInstance = new MyStudent();
// myInstance.setName('new');

function getInfo(id: number) : Student
{
  return {
    stdId: id,
    // stdName: 'lee',
    gender: 'female',
    course: 'typescript',
    completed: false
  };
}
// console.log(getInfo(1234));

function setInfo(student : Student) :void
{
  console.log(student);
}
let std: Student = {
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
const num : 1 = 1; // 숫자 리터럴
const str : 'kim' = 'kim'; // 문자 리터럴
const user : {name: string, age: number} = { // 객체 리터럴
  name : 'john',
  age : 25
}


// any 타입
let anyVal : any = 100;
anyVal = 200;
anyVal = 'kim';
anyVal = true;

// 유니온 타입 : 공용체
let unionVal : string | number;
unionVal = 1;
unionVal = 'lee';
// unionVal = true; // 에러


// 타입 별칭
type strOrNum = string | number;

let numStr : strOrNum = 100;
let item:number;
item = numStr;

function convertToString(val: strOrNum) : string {
  // 타입 가드
  if(typeof val === 'string') {
    item = 0;
  } else {
    item = val;
  }
  const result = String(val);
  console.log(result + " : " + typeof result);
  return result;
}
function convertToNumber(val: strOrNum) : number {
  const result = Number(val);
  console.log(result + " : " + typeof result);
  return result;
}

// convertToString(numStr);
// convertToNumber(numStr);



/* Array */
let numbers: number[] = [1,2,3,4,5];
let fruits: string[] = ['apple', 'banana', 'strawberry'];

// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

/* 배열의 유니온 타입 */
let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
// for(let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }


/* 
  Tuple 
  타입의 순서가 정해져 있다.
*/
let greeting : [number, string, boolean] = [1, 'hello', true];
// for(let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }


/* Spread 연산자 */
let firstArray = [1,2,3];
let secondArray = [4,5,6];
let combineArray = [...firstArray, ...secondArray];
for(let i = 0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}