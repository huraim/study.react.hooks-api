import React, {useContext, useRef} from 'react'
import {TodoContext} from './TodoStore.js'

function Form() {
  const inputRef = useRef(false); //useRef
  const {addTodo} = useContext(TodoContext);

  const addTodoData = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
  }
  
  return (
    <form action="">
      <input type="text" ref={inputRef} /> {/*useRef*/}
      <button onClick={addTodoData}>할일추가</button>
    </form>
  )
}

export default Form;
