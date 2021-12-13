import React, {useContext, useRef} from 'react'
import {TodoContext} from './TodoStore.js'

function Form() {
  const inputRef = useRef(false); //useRef
  const {dispatch} = useContext(TodoContext);

  const addTodoData = (e) => {
    e.preventDefault();
    // addTodo(inputRef.current.value);
    dispatch({type:'ADD_TODO', payload:inputRef.current.value});
  }
  
  return (
    <form action="">
      <input type="text" ref={inputRef} /> {/*useRef*/}
      <button onClick={addTodoData}>할일추가</button>
    </form>
  )
}

export default Form;
