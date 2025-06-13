import React, { useEffect, useState } from "react";
import TodoModal from "./TodoModal";

// interface랑 별반 다를건 없다.
// 다만, interface는 주로 객체의 구조를 정의할 때 사용되어서
// 여기처럼 타입을 지정하기 위한 용도로는 type이 좀 더 알맞다.
type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
}


// : React.FC (이건 컴포넌트 자체에 타입을 지정)
const Todolist: React.FC = () => {
  const name: string = "kbm";
  const [title] = useState('투두 리스트 만들기');
  const todosArr = [
    {id: 1, text: '공부하기', isChecked: false},
    {id: 2, text: '잠자기', isChecked: false},
    {id: 3, text: '미팅하기', isChecked: false},
  ];

  const [todos, setTodos] = useState<Todo[]>(todosArr);
  const [newTodoValue, setNewTodoValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTodo, setModalTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (index: number) => {
    setTodos( prev => prev.map( (item,idx) => {
      return index === idx ? {...item, isChecked: !item.isChecked} : item;
    }));
  }

  function addTodo() {
    if(newTodoValue.trim() === "") {
      return
    }
    setTodos( prev => [...prev, {
      id: Date.now(), text : newTodoValue, isChecked: false
    }]);
    setNewTodoValue("");
  }

  function deleteTodo(todoId: number) {
    setTodos( todos.filter( todo => todo.id !== todoId) );
  }

  function handleTodoClick(todo: Todo) {
    console.log(todo.text);
    setModalTodo(todo);
    setShowModal(true);
  }


  return (
    <div>
      <p>{name}</p>
      <h1>{title}</h1>

      <form
        onSubmit={(e)=>{
          e.preventDefault();
          addTodo();
        }}>
        <input 
          id="todo-input" 
          type="text"
          autoComplete="off"
          value={newTodoValue}
          onChange={ (e)=>{setNewTodoValue(e.target.value)} }
        />
        <button type="submit">투두 추가하기</button>
      </form>

      <ul className="container">
        {todos.map( (todo, index) => 
          <li key={todo.id}>
            <input 
              type="checkbox"
              onChange={ ()=> {handleCheckedChange(index);} }
            />
            <span
              onClick={()=>{handleTodoClick(todo)}}>
              {
                todo.isChecked 
                ? <del>{todo.text}</del> 
                : todo.text
              }
            </span>
            <button 
              type="button"
              onClick={()=>{deleteTodo(todo.id)}}
            >
              삭제
            </button>
          </li>
        )}
      </ul>

      {showModal && <TodoModal modalTodo={modalTodo} setShowModal={setShowModal}/>}
    </div>
  )
}

export {Todolist};
export type {Todo};