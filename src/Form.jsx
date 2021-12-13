import React, {useContext} from 'react'
import {TodoContext} from './TodoStore.js'

function Form() {
  const {addTodo, changeInputData} = useContext(TodoContext);
  return (
    <form action="">
      <input type="text" name="" onChange={changeInputData}/>
      <button onClick={addTodo}>할일추가</button>
    </form>
  )
}

export default Form;
