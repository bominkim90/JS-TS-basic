// 일반적인 직원 정보
var empName = 'kim';
var empAge = 36;
var empJob = 'developer';
function printEmp(empName, empAge, empJob) {
    console.log("empName : ".concat(empName, ", empAge: ").concat(empAge, ", empJob: ").concat(empJob));
}
// printEmp(empName, empAge, empJob);
// class 로 변환
var Employee = /** @class */ (function () {
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
    function Employee(_empName, _empAge, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._empAge = _empAge;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("empName : ".concat(_this._empName, ", empAge: ").concat(_this._empAge, ", empJob: ").concat(_this._empJob));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // getter
        get: function () {
            return this._empName;
        },
        // setter
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee('kim', 36, 'developer');
emp1.empName = 'lee'; // setter는 대입연산자(=)로 값을 설정해야함
emp1.printEmp();
