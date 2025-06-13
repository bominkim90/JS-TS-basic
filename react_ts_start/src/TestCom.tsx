import React from 'react';
import './App.css';
import ClassComponent from './ClassCom';
import FuncCom from './FuncCom';


function TestCom() {
  let name = "리액트";
  let validation = false;
  const port = undefined;
  let inlineStyle = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '48px'
  }

  return (
    <div className="App">
      <h1 className='test'>Hello, {name}</h1>

      <div style={inlineStyle}>인라인 스타일</div>

      {name === "리액트" 
        ? <p>여긴 리액트 입니다.</p>
        : <p>여긴 리액트가 아닙니다.</p>
      }

      {validation && <p>반갑습니다.</p>}

      {port || "port 번호를 설정하지 않았습니다."}

      <br></br>
      <br />

      {/* 주석문을 작성합니다. */}

      <ClassComponent />

      <FuncCom />
    </div>
  );
}

// jsx문법이 아닌, 자바스크립트적인 문법
// function App() {
//   return React.createElement(
//     "div", null, "hello, 리액트",
//     React.createElement("p", null, "반갑습니다.") 
//   )
// }

export default TestCom;
