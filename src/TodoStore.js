import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import List from './List'
import useFetch from './useFetch.js'
import Header from './Header';
import Form from './Form';

export const TodoContext = React.createContext(); //useContext

const TodoStore = () => {
  const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState(); //useRef로 대체

  const loading = useFetch(setTodos, 'http://localhost:8080/todos');
  
  // const changeInputData = (e) => { //useRef로 대체
  //   setNewTodo(e.target.value);
  // }

  const addTodo = (newTodo) => {
    setTodos([...todos, {'id':todos.length, 'title': newTodo, 'status':'todo'}]); //원래 todo 배열에, 입력한 값 넣기
  }

  const changeTodoStatus = (id) => {
    // debugger; //디버거 찍어보고 id값 들어왔는지 확인
    const updateTodos = todos.map(todo => {
      if(todo.id === +id) { //id 문자열을 숫자로 +id
        if(todo.status === 'done') todo.status= "todo";
        else todo.status = "done";
      }
      return todo;
    })
    
    setTodos(updateTodos);
  }

  useEffect( () => {
    console.log("새로운 내용 렌더링", todos)
  }, [todos]) //todos 변화만 감지

  return (
    <TodoContext.Provider value={{todos, addTodo, loading, changeTodoStatus}}>

      <Header />

      <Form />

      <List />

    </TodoContext.Provider>
  )
}

export default TodoStore;
