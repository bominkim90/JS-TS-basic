import { Component } from "react";

// class 형태로 컴포넌트 만들기
// 표현 형태이기 때문에, 그대로 따라하면 된다
// react모듈에서 Component 라는 class를 상속받아야 한다.
class ClassComponent extends Component {
  render() {
    return (
      <div>
        클래스형 컴포넌트
      </div>
    )
  }
}

// 다른 컴포넌트에서 import 해서 사용하기 위해
// export 해야한다.
export default ClassComponent;