// 일반적인 직원 정보
let empName : string = 'kim';
let empAge : number = 36;
let empJob : string = 'developer';

function printEmp(empName:string, empAge:number, empJob:string) : void {
  console.log(`empName : ${empName}, empAge: ${empAge}, empJob: ${empJob}`);
}
// printEmp(empName, empAge, empJob);


// class 로 변환
class Employee {
  // 멤버 변수를 접근지정자로 보호해보자 (public private protected)
  // private _empName:string; // private 멤버변수는 관습적으로 '_변수명' 으로 한다
  // private _empAge:number | undefined;
  // private _empJob:string | undefined;
  // constructor(empName:string, empAge? :number, empJob? :string) {
  //   this._empName = empName;
  //   this._empAge = empAge;
  //   this._empJob = empJob;
  // }

  // 위 코드를 아래 코드처럼 줄일 수 있음
  constructor(
    private _empName:string, 
    private _empAge :number, 
    private _empJob :string
  ) {

  }

  // getter
  get empName() {
    return this._empName;
  }
  // setter
  set empName(val: string) {
    this._empName = val;
  }


  printEmp = () :void => {
    console.log(`empName : ${this._empName}, empAge: ${this._empAge}, empJob: ${this._empJob}`);
  }
}

const emp1 = new Employee('kim', 36, 'developer');
emp1.empName = 'lee'; // setter는 대입연산자(=)로 값을 설정해야함
emp1.printEmp();
